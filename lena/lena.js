(function(){
function get(id){
	return document.getElementById(id);
}
var canvas = get("canvas");
var img = get("img");
var ctx = canvas.getContext("2d");
ctx.drawImage(img,0,0);
var canvasData = ctx.getImageData(0,0,canvas.width,canvas.height);
//arr 存储灰度直方图数据
var arr = [];
var max = 0;
var min = 255;
var avg = 0;
//arr中256个灰度值个数统计先赋值为0
for(var i =0; i < 255; i ++) {
	arr[i] = 0;
}
//获取图像数据
for (var x = 0; x < canvasData.width; x++) {
    for (var y = 0; y < canvasData.height; y++) {
        var idx = (x + y * canvas.width) * 4;
        var r = canvasData.data[idx + 0];
        var g = canvasData.data[idx + 1];
        var b = canvasData.data[idx + 2];
        arr[r]++;
        if(r > max) {
        	max = r;
        }
        if(r < min) {
        	min = r;
        }
        avg += r;
    }
}
avg = avg/(256*256);
get("tongji").onclick = function(){
	get("display-text").innerHTML = "";
	get("display-img").innerHTML = "";
	get("display-text").innerHTML = "最大值:" + max + " 最小值:" + min + " 平均值:" + avg;
	var n0 = document.createElement("span");
	get("display-img").appendChild(n0);
	n0.innerHTML = "0";
	n0.style.position = "absolute";
	n0.style.left = "0px";
	n0.style.bottom = "-30px";
	var n1 = document.createElement("span");
	get("display-img").appendChild(n1);
	n1.innerHTML = "255";
	n1.style.position = "absolute";
	n1.style.left = "512px";
	n1.style.bottom = "-30px";
	for(var i =0; i < 256; i ++) {
		var div = document.createElement("div");
		get("display-img").appendChild(div);
		div.style.height = arr[i]/4 + "px";
		div.style.left = i*2 + "px";
	}
}
//直方图均衡实现对比度增强
get("duibi").onclick = function() {
	get("display-text").innerHTML = "";
	get("display-img").innerHTML = "";
	//存放累计直方图
	var arr_leiji = [];
	for(var i = 0; i < 256; i ++) {
		arr_leiji[i] = arr[i]/(256*256);
	}
	//累计直方图
	for(var i = 1; i < 256; i++) {
		arr_leiji[i] += arr_leiji[i-1]; 
	}
	var newCanvas = document.createElement("canvas");
	newCanvas.width = 256;
	newCanvas.height = 256;
	var newCtx = newCanvas.getContext("2d");
	get("display-img").appendChild(newCanvas);
	var output = {
		width: 256,
		height: 256,
		data: canvasData.data
	};
	//均衡化
	for (var x = 0; x < output.width; x++) {
    	for (var y = 0; y < output.height; y++) {
        	var idx = (x + y * output.width) * 4;
        	output.data[idx + 0] = Math.round(255 * arr_leiji[output.data[idx + 0]]);
        	output.data[idx + 1] = Math.round(255 * arr_leiji[output.data[idx + 1]]);
        	output.data[idx + 2] = Math.round(255 * arr_leiji[output.data[idx + 2]]);
    	}
	}
	newCtx.putImageData(canvasData,0,0);
	canvasData = ctx.getImageData(0,0,canvas.width,canvas.height);
}
//中值滤波实现图像平滑
get("pinghua").onclick = function(){
	get("display-text").innerHTML = "";
	get("display-img").innerHTML = "";
	//添加椒盐噪声
	var newCanvas1 = document.createElement("canvas");
	newCanvas1.width = 256;
	newCanvas1.height = 256;
	var newCtx1 = newCanvas1.getContext("2d");
	get("display-img").appendChild(newCanvas1);
	var output1 = {
		width: 256,
		height: 256,
		data: canvasData.data
	};
	//分别添加3000个椒盐噪声
	for(var i = 0; i < 1500; i ++) {
		var randomx = Math.round(Math.random()*255);
		var randomy = Math.round(Math.random()*255);
		output1.data[randomx*4 + randomy*256*4] = 0;
		output1.data[randomx*4 + randomy*256*4 + 1] = 0;
		output1.data[randomx*4 + randomy*256*4 + 2] = 0;
	}
	for(var i = 0; i < 1500; i ++) {
		var randomx = Math.round(Math.random()*255);
		var randomy = Math.round(Math.random()*255);
		output1.data[randomx*4 + randomy*256*4] = 255;
		output1.data[randomx*4 + randomy*256*4 + 1] = 255;
		output1.data[randomx*4 + randomy*256*4 + 2] = 255;
	}
	newCtx1.putImageData(canvasData,0,0);
	//显示处理后的图片
	var newCanvas = document.createElement("canvas");
	newCanvas.width = 256;
	newCanvas.height = 256;
	var newCtx = newCanvas.getContext("2d");
	get("display-img").appendChild(newCanvas);
	var output = {
		width: 256,
		height: 256,
		data: canvasData.data
	};
	//中值滤波
	for (var x = 1; x < output.width-1; x++) {
    	for (var y = 1; y < output.height-1; y++) {
        	var idx = (x + y * output.width) * 4;
        	//将该点和周围的八个点的灰度值存入一个数组
        	var m = [];
        	m[0] = output.data[idx - 4 - output.width * 4];
        	m[1] = output.data[idx + 0 - output.width * 4];
        	m[2] = output.data[idx + 4 - output.width * 4];
        	m[3] = output.data[idx - 4];
        	m[4] = output.data[idx + 0];
        	m[5] = output.data[idx + 4];
        	m[6] = output.data[idx - 4 + output.width * 4];
        	m[7] = output.data[idx + 0 + output.width * 4];
        	m[8] = output.data[idx + 4 + output.width * 4];
        	//给m数组排序
        	var temp = 0;
        	for(var i = 0; i < 9; i ++) {
        		for (var j = 0; j < 9; j++) {
        			if(m[i] > m[j]){
        				temp = m[i];
        				m[i] = m[j];
        				m[j] = temp;
        			}
        		};
        	}
        	output.data[idx + 0] = m[4];
        	output.data[idx + 1] = m[4];
        	output.data[idx + 2] = m[4];
    	}
	}
	newCtx.putImageData(canvasData,0,0);
	canvasData = ctx.getImageData(0,0,canvas.width,canvas.height);
}

//卷积处理
function ConvolutionMatrix(input, m, divisor, offset){
	var output = document.createElement("canvas").getContext('2d').createImageData(input);
	var iD = input.data, oD = output.data;
	var w = 256;
	var h =256;
	// 对除了边缘的点之外的内部点的 RGB 进行操作，透明度在最后都设为 255
	for (var y = 1; y < 255; y += 1) {
		for (var x = 1; x < 255; x += 1) {
			for (var c = 0; c < 3; c += 1) {
				var i = (y*w + x)*4 + c;
				oD[i] = offset
					+(m[0]*iD[i-w*4-4] + m[1]*iD[i-w*4] + m[2]*iD[i-w*4+4]
					+ m[3]*iD[i-4]     + m[4]*iD[i]     + m[5]*iD[i+4]
					+ m[6]*iD[i+w*4-4] + m[7]*iD[i+w*4] + m[8]*iD[i+w*4+4]) / divisor;
			}
			oD[(y*256 + x)*4 + 3] = 255; // 设置透明度为不透明
		}
	}
	return output;
}
//图像锐化，sobel算子
get("ruihua").onclick = function() {
	get("display-text").innerHTML = "";
	get("display-img").innerHTML = "";
	//x方向
	var mx = [1,0,-1,2,0,-2,1,0,-1];
	var newCanvasx = document.createElement("canvas");
	newCanvasx.width = 256;
	newCanvasx.height = 256;
	var newCtxx = newCanvasx.getContext("2d");
	get("display-img").appendChild(newCanvasx);
	var outputx = ConvolutionMatrix(canvasData, mx, 1,0);
	newCtxx.putImageData(outputx,0,0);
	canvasData = ctx.getImageData(0,0,canvas.width,canvas.height);
	//y方向
	var my = [1,2,1,0,0,0,-1,-2,-1];
	var newCanvasy = document.createElement("canvas");
	newCanvasy.width = 256;
	newCanvasy.height = 256;
	var newCtxy = newCanvasy.getContext("2d");
	get("display-img").appendChild(newCanvasy);
	var outputy = ConvolutionMatrix(canvasData, my, 1,0);
	newCtxy.putImageData(outputy,0,0);
	canvasData = ctx.getImageData(0,0,canvas.width,canvas.height);
	//两个方向
	var mx = [1,0,-1,2,0,-2,1,0,-1];
	var my = [1,2,1,0,0,0,-1,-2,-1];
	var newCanvas = document.createElement("canvas");
	newCanvas.width = 256;
	newCanvas.height = 256;
	var newCtx = newCanvas.getContext("2d");
	get("display-img").appendChild(newCanvas);
	var output = ConvolutionMatrix(canvasData, mx, 1,0);
	var output = ConvolutionMatrix(output, my, 1,0);
	newCtx.putImageData(output,0,0);
	canvasData = ctx.getImageData(0,0,canvas.width,canvas.height);
}
//旋转
get("xuanzhuan").onclick = function() {
	get("display-text").innerHTML = "";
	get("display-img").innerHTML = "";
	var degree = get("xuanzhuan").value;
	var newCanvas = document.createElement("canvas");
	newCanvas.width = 256;
	newCanvas.height = 256;
	var newCtx = newCanvas.getContext("2d");
	get("display-img").appendChild(newCanvas);
	newCtx.putImageData(canvasData,0,0);
	canvasData = ctx.getImageData(0,0,canvas.width,canvas.height);
	newCanvas.style.transform = "rotate(" + degree +"deg)";
}
var dct_matrix = [];
var BLOCK_SIZE = 8;
var coefficients = 8;
function init_dct_matrix(size) {
    for (var k = 0; k < size; k++) {
        var tk = k * Math.PI / size;

        dct_matrix[k] = [];
        for (var x = 0; x < size; x++) {
            dct_matrix[k][x] = Math.cos(tk * (x + 0.5));
        }    
    }
}
//dct变化
function fdct(src, dst, width, height) {
    var temp = [];
    var acc = [];

    for (var y_block_offset = 0; y_block_offset < height; y_block_offset += BLOCK_SIZE) {
        for (var x_block_offset = 0; x_block_offset < width; x_block_offset += BLOCK_SIZE) {
            for (var y = 0; y < BLOCK_SIZE; y++) {
                for (var k = 0; k < BLOCK_SIZE; k++) {
                    var dst_offset = ((y_block_offset + y) * width + x_block_offset + k) * 4;
                    temp[dst_offset + 0] = 0;
                    temp[dst_offset + 1] = 0;
                    temp[dst_offset + 2] = 0;

                    for (var x = 0; x < BLOCK_SIZE; x++) {
                        var src_offset = ((y_block_offset + y) * width + x_block_offset + x) * 4;
                        temp[dst_offset + 0] += (src[src_offset + 0] - 128) * dct_matrix[k][x];
                        temp[dst_offset + 1] += (src[src_offset + 1] - 128) * dct_matrix[k][x];
                        temp[dst_offset + 2] += (src[src_offset + 2] - 128) * dct_matrix[k][x];
                    }

                    var uk = (k == 0 ? 1 : 2) / BLOCK_SIZE;
                    temp[dst_offset + 0] *= uk;
                    temp[dst_offset + 1] *= uk;
                    temp[dst_offset + 2] *= uk;
                }            
            }

            for (var x = 0; x < BLOCK_SIZE; x++) {
                for (var k = 0; k < BLOCK_SIZE; k++) {
                    var dst_offset = ((y_block_offset + k) * width + x_block_offset + x) * 4;
                    acc[0] = 0;
                    acc[1] = 0;
                    acc[2] = 0;

                    for (var y = 0; y < BLOCK_SIZE; y++) {
                        var src_offset = ((y_block_offset + y) * width + x_block_offset + x) * 4;
                        acc[0] += temp[src_offset + 0] * dct_matrix[k][y];
                        acc[1] += temp[src_offset + 1] * dct_matrix[k][y];
                        acc[2] += temp[src_offset + 2] * dct_matrix[k][y];
                    }

                    var uk = (k == 0 ? 1 : 2) / BLOCK_SIZE;
                    acc[0] = acc[0] * uk;
                    acc[1] = acc[1] * uk;
                    acc[2] = acc[2] * uk;

                    dst[dst_offset + 0] = acc[0] + 128;
                    dst[dst_offset + 1] = acc[1] + 128;
                    dst[dst_offset + 2] = acc[2] + 128;
                    dst[dst_offset + 3] = 255;
                }
            }
        }
    }
}
//idct
function idct(src, dst, width, height, num_coeff) {
    var temp = [];
    var acc = [];

    for (var y_block_offset = 0; y_block_offset < height; y_block_offset += BLOCK_SIZE) {
        for (var x_block_offset = 0; x_block_offset < width; x_block_offset += BLOCK_SIZE) {
            for (var x = 0; x < BLOCK_SIZE; x++) {
                for (var k = 0; k < BLOCK_SIZE; k++) {
                    var dst_offset = ((y_block_offset + k) * width + x_block_offset + x) * 4;
                    temp[dst_offset + 0] = 0;
                    temp[dst_offset + 1] = 0;
                    temp[dst_offset + 2] = 0;

                    for (var y = 0; y < num_coeff; y++) {
                        var src_offset = ((y_block_offset + y) * width + x_block_offset + x) * 4;
                        temp[dst_offset + 0] += (src[src_offset + 0] - 128) * dct_matrix[y][k];
                        temp[dst_offset + 1] += (src[src_offset + 1] - 128) * dct_matrix[y][k];
                        temp[dst_offset + 2] += (src[src_offset + 2] - 128) * dct_matrix[y][k];
                    }
                }
            }

            for (var y = 0; y < BLOCK_SIZE; y++) {
                for (var k = 0; k < BLOCK_SIZE; k++) {
                    var dst_offset = ((y_block_offset + y) * width + x_block_offset + k) * 4;
                    acc[0] = 0;
                    acc[1] = 0;
                    acc[2] = 0;

                    for (var x = 0; x < num_coeff; x++) {
                        var src_offset = ((y_block_offset + y) * width + x_block_offset + x) * 4;
                        acc[0] += temp[src_offset + 0] * dct_matrix[x][k];
                        acc[1] += temp[src_offset + 1] * dct_matrix[x][k];
                        acc[2] += temp[src_offset + 2] * dct_matrix[x][k];
                    }

                    dst[dst_offset + 0] = acc[0] + 128;
                    dst[dst_offset + 1] = acc[1] + 128;
                    dst[dst_offset + 2] = acc[2] + 128;
                    dst[dst_offset + 3] = 255;
                }
            }
        }
    }
}

//dct操作
get("bianhuan").onclick = function() {
	get("display-text").innerHTML = "";
	get("display-img").innerHTML = "";
	//定义参数
	var img;
	var canvas = [];
	var ctx = [];
	var imgdata = [];

	init_dct_matrix(BLOCK_SIZE);

	var newCanvas1 = document.createElement("canvas");
	newCanvas1.width = 256;
	newCanvas1.height = 256;
	var newCtx1 = newCanvas1.getContext("2d");
	get("display-img").appendChild(newCanvas1);

	var newCanvas2 = document.createElement("canvas");
	newCanvas2.width = 256;
	newCanvas2.height = 256;
	var newCtx2 = newCanvas2.getContext("2d");
	get("display-img").appendChild(newCanvas2);

	canvas[0] = document.getElementById("canvas");
    canvas[1] = newCanvas1;
    canvas[2] = newCanvas2;
    ctx[0] = canvas[0].getContext("2d");
    ctx[1] = canvas[1].getContext("2d");
    ctx[2] = canvas[2].getContext("2d");

    imgdata[0] = ctx[0].getImageData(0, 0, 256, 256);
    imgdata[1] = ctx[1].createImageData(256, 256);
    imgdata[2] = ctx[2].createImageData(256, 256);

    // dct变化
    fdct(imgdata[0].data, imgdata[1].data, 256, 256);

    // 画出dct变化后的图
    ctx[1].putImageData(imgdata[1], 0, 0);

    // idct
    idct(imgdata[1].data, imgdata[2].data, 256, 256, coefficients);

    // 画出idct图
    ctx[2].putImageData(imgdata[2], 0, 0);
}

})();