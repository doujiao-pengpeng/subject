/**
 * Created by pengpeng on 2017/7/1.
 */

///////////////////
//fillStyle  颜色值 | 渐变色填充（线性，径向）分两步设置
///////////////////径向渐变
// step 1 : let grd = ctx.createRadialGradient(x0,y0,r0,x1,y1,r1);
// step 2 : grd.addColorStop(stop,color);添加关键色
///////////////////

window.onload = function () {
  let canvas = document.getElementById('canvas');
  canvas.width = 800;
  canvas.height = 800;

  let ctx = canvas.getContext('2d');

  let grd = ctx.createRadialGradient(400,400,0,400,400,400);
  grd.addColorStop(0.0,'#fff');
  grd.addColorStop(0.25,'#f00');
  grd.addColorStop(0.5,'#0f0');
  grd.addColorStop(0.75,'#00f');
  grd.addColorStop(1.0,'#000');
  ctx.fillStyle = grd;
  ctx.fillRect(0,0,800,800);
};