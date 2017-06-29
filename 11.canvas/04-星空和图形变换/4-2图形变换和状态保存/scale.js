/**
 * Created by pengpeng on 2017/6/30.
 */
window.onload = function () {
  let canvas = document.getElementById('canvas');
  canvas.width = 800;
  canvas.height = 800;
  let ctx = canvas.getContext('2d');

  ctx.lineWidth = 5;
  //scale，同时放大了其它属性，如坐标，线宽
  ctx.save();
  ctx.scale(1,1);
  ctx.strokeRect(50,50,100,100);
  ctx.restore();

  ctx.save();
  ctx.scale(2,2);
  ctx.strokeRect(50,50,100,100);
  ctx.restore();

  ctx.save();
  ctx.scale(3,3);
  ctx.strokeRect(50,50,100,100);
  ctx.restore();

};