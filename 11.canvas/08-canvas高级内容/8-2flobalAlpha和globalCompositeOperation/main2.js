/**
 * Created by pengpeng on 2017/7/1.
 */

/***
 * ctx.globalAlpha  设置全局透明度
 * ctx.globalCompositeOperation  =  "source-over"（默认）
 **/

window.onload = function () {
  let canvas = document.getElementById('canvas');
  canvas.width = 800;
  canvas.height = 800;

  let ctx = canvas.getContext('2d');
  ctx.save();
  ctx.fillStyle =
  ctx.restore()

};

