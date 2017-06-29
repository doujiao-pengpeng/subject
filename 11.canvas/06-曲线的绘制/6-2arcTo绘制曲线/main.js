/**
 * Created by pengpeng on 2017/7/1.
 */

///////////////////
//fillStyle  颜色值 | 渐变色填充（线性，径向）分两步设置
///////////////////线性渐变
// step 1 : let grd = ctx.createLinearGradient(xStart,yStart,xEnd,yEnd);
// step 2 : grd.addColorStop(stop,color);添加关键色
///////////////////

window.onload = function () {
  let canvas = document.getElementById('canvas');
  canvas.width = 800;
  canvas.height = 800;

  let ctx = canvas.getContext('2d');

  let grd = ctx.createLinearGradient(400,0,800,0);
  grd.addColorStop(0.0,'#fff');
  grd.addColorStop(0.25,'#f00');
  grd.addColorStop(0.5,'#0f0');
  grd.addColorStop(0.75,'#00f');
  grd.addColorStop(1.0,'#000');
  ctx.fillStyle = grd;
  ctx.fillRect(0,0,800,800);
};