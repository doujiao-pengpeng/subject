/**
 * Created by pengpeng on 2017/6/29.
 */

window.onload = function () {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  drawRect(ctx,50,50,200,100,'yellow','',10);
  drawRect_2(ctx,100,200,200,100,'yellow','red',10);
  drawRect_3(ctx,200,200,200,100,'rgba(255,0,255,0.6)','',10);

};

/**
 * 自定义绘制矩形函数
 * @param ctx
 * @param x
 * @param y
 * @param width
 * @param height
 * @param fillStyle
 * @param strokeStyle
 * @param lineWidth
 */
function drawRect(ctx,x,y,width,height,fillStyle,strokeStyle,lineWidth){
  ctx.beginPath();
  ctx.moveTo(x,y);
  ctx.lineTo(x+width,y);
  ctx.lineTo(x+width,y+height);
  ctx.lineTo(x,y+height);
  ctx.closePath();

  ctx.strokeStyle = strokeStyle;
  ctx.lineWidth = lineWidth;
  ctx.fillStyle = fillStyle;

  ctx.fill();
  ctx.stroke();

}

/**
 * 自定义绘制矩形函数2
 * @param ctx
 * @param x
 * @param y
 * @param width
 * @param height
 * @param fillStyle
 * @param strokeStyle
 * @param lineWidth
 */
function drawRect_2(ctx,x,y,width,height,fillStyle,strokeStyle,lineWidth){
  ctx.beginPath();
  ctx.rect(x,y,width,height);//相当于上面四步
  ctx.closePath();

  ctx.strokeStyle = strokeStyle;
  ctx.lineWidth = lineWidth;
  ctx.fillStyle = fillStyle;

  ctx.fill();
  ctx.stroke();

}

/**
 * 自定义绘制矩形函数3
 * @param ctx
 * @param x
 * @param y
 * @param width
 * @param height
 * @param fillStyle
 * @param strokeStyle
 * @param lineWidth
 */
function drawRect_3(ctx,x,y,width,height,fillStyle,strokeStyle,lineWidth){

  ctx.strokeStyle = strokeStyle;
  ctx.lineWidth = lineWidth;
  ctx.fillStyle = fillStyle;

  ctx.fillRect(x,y,width,height);
  ctx.strokeRect(x,y,width,height);

}