/**
 * Created by pengpeng on 2017/6/29.
 */

window.onload = function () {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  //drawMore_1(ctx);
  //drawMore_2(ctx);
  //drawMore_3(ctx);
  drawMore_4(ctx);

};

/**
 * 当lineWidth较宽时，会出现闭合时少一部分内容
 * @param ctx
 */
function drawMore_1(ctx){
  ctx.moveTo(50,50);
  ctx.lineTo(100,50);
  ctx.lineTo(100,20);
  ctx.lineTo(150,75);
  ctx.lineTo(100,130);
  ctx.lineTo(100,100);
  ctx.lineTo(50,100);
  ctx.lineTo(50,50);

  ctx.strokeStyle = 'red';
  ctx.lineWidth = '10';

  ctx.stroke();

}

/**
 * 解决方法：当绘制闭合图像时，使用beginPath()和closePath()包裹，
 * @param ctx
 */
function drawMore_2(ctx){
  ctx.beginPath();
  ctx.moveTo(50,50);
  ctx.lineTo(100,50);
  ctx.lineTo(100,20);
  ctx.lineTo(150,75);
  ctx.lineTo(100,130);
  ctx.lineTo(100,100);
  ctx.lineTo(50,100);
  ctx.lineTo(50,50);
  ctx.closePath();

  ctx.strokeStyle = 'red';
  ctx.lineWidth = '10';

  ctx.stroke();

}


/**
 * 使用此方法绘制时，如果先描边后填充，会出现描边少一半像素的情况，解决方法如4
 * @param ctx
 */
function drawMore_3(ctx){
  ctx.beginPath();
  ctx.moveTo(50,50);
  ctx.lineTo(100,50);
  ctx.lineTo(100,20);
  ctx.lineTo(150,75);
  ctx.lineTo(100,130);
  ctx.lineTo(100,100);
  ctx.lineTo(50,100);
  ctx.lineTo(50,50);
  ctx.closePath();

  ctx.strokeStyle = 'red';
  ctx.lineWidth = '10';

  ctx.stroke();

  ctx.fillStyle = 'yellow';
  ctx.fill();

}

/**
 * 标准方式：先填充，后描边，同时推荐使用drawMore_4()标准格式
 * @param ctx
 */
function drawMore_4(ctx){
  ctx.beginPath();
  ctx.moveTo(50,50);
  ctx.lineTo(100,50);
  ctx.lineTo(100,20);
  ctx.lineTo(150,75);
  ctx.lineTo(100,130);
  ctx.lineTo(100,100);
  ctx.lineTo(50,100);
  //可以省略ctx.lineTo(50,50);
  ctx.closePath();

  ctx.fillStyle = 'yellow';
  ctx.strokeStyle = 'red';
  ctx.lineWidth = '10';

  ctx.fill();
  ctx.stroke();

}