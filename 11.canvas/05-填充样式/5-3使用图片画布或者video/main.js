/**
 * Created by pengpeng on 2017/7/1.
 */

///////////////////
//fillStyle  颜色值(可以有透明度) | 渐变色填充（线性，径向）分两步设置 | 图片（pattern) |canvas |video
///////////////////径向渐变
// let pattern = ctx.createPattern(img,repeat-style);//重复方式，不重复，x/y重复，xyRepeat
// let pattern = ctx.createPattern(canvas,repeat-style);也可以使用canvas作为填充源
// let pattern = ctx.createPattern(video,repeat-style);也可以使用video作为填充源
///////////////////

window.onload = function () {
  let canvas = document.getElementById('canvas');
  canvas.width = 800;
  canvas.height = 800;

  let ctx = canvas.getContext('2d');
  let bg = new Image();
  bg.src = 'bg.jpg';
  bg.onload = function () {
    ctx.fillStyle  = ctx.createPattern(bg,'repeat-x');
    ctx.fillRect(0,0,800,800);
  }

};