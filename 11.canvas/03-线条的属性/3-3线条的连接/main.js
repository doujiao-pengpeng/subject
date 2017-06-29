/**
 * Created by pengpeng on 2017/6/30.
 */
window.onload = function () {
  var canvas = document.getElementById('canvas');
  canvas.width = 800;
  canvas.height = 800;
  
  var ctx = canvas.getContext('2d');

  ctx.lineWidth = 5;
  //lineJoin = miter | bevel | round
  ctx.lineJoin = 'miter';
  ctx.miterLimit = 10;//超过之后会，使用bevel显示
  drawStar(ctx,50,200,300,300,20);
};

/**
 *
 * @param ctx
 * @param r 内部半径
 * @param R 外部半径
 * @param x 圆心x轴偏移量
 * @param y 圆心y轴偏移量
 * @param rot 旋转角度
 */
function drawStar(ctx,r,R,x,y,rot) {
  ctx.beginPath();
  for(var i=0;i<5;i++){
    ctx.lineTo(Math.cos((18 + i*72 - rot)/180 * Math.PI)*R + x,-Math.sin((18 + i*72 - rot)/180 * Math.PI)*R + y);
    ctx.lineTo(Math.cos((54 + i*72 - rot)/180 * Math.PI)*r + x,-Math.sin((54 + i*72 - rot)/180 * Math.PI)*r + y)
  }
  ctx.closePath();
  ctx.stroke();
}