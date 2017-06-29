/**
 * Created by pengpeng on 2017/7/1.
 */

///////////////////
//arcTo(x1,y1,x2,y2,radius);
///////////////////

window.onload = function () {
  let canvas = document.getElementById('canvas');
  canvas.width = 800;
  canvas.height = 800;
  let ctx = canvas.getContext('2d');

  fillMoon(ctx,2,400,400,300,0);
};

/**
 *
 * @param ctx
 * @param d 控制点横坐标
 * @param x 圆心位置(x,y)
 * @param y
 * @param R 半圆的半径
 * @param rot {number} 旋转角度
 * @param fillColor 填充颜色（可选，默认黑色）
 */
function fillMoon(ctx,d,x,y,R,rot, /*option*/ fillColor) {
  ctx.save();
  ctx.translate(x,y);
  ctx.rotate(rot*Math.PI/180);
  ctx.scale(R,R);
  pathMoon(ctx,d);
  ctx.fillStyle = fillColor || '#fb5';
  ctx.fill();
  ctx.restore();
}

/**
 * 绘制弯月的路径
 * @param ctx
 * @param d
 */
function pathMoon(ctx,d){
  ctx.beginPath();
  ctx.arc(0,0,1,0.5*Math.PI,1.5*Math.PI,true);
  ctx.moveTo(0,-1);
  ctx.arcTo(d,0,0,1,dis(0,1,d,0)/d);
  ctx.closePath();
}

/**
 * 计算直角三角形第三边长
 * @param x1
 * @param y1
 * @param x2
 * @param y2
 * @return {number}
 */
function dis(x1,y1,x2,y2) {
  return Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
}