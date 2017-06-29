/**
 * Created by pengpeng on 2017/7/1.
 */

///////////////////
//arcTo(x1,y1,x2,y2,radius);
//三点 开始点 控制点 结束点
///////////////////
//demo http://blogs.sitepointstatic.com/examples/tech/canvas-curves/quadratic-curve.html
window.onload = function () {
  let canvas = document.getElementById('canvas');
  canvas.width = 800;
  canvas.height = 800;
  let ctx = canvas.getContext('2d');

  ctx.beginPath();
  ctx.moveTo(159, 227);
  ctx.quadraticCurveTo(250, 100, 400, 250);
  ctx.stroke();
};

