/**
 * Created by pengpeng on 2017/6/30.
 */
window.onload = function () {
  let canvas = document.getElementById('canvas');
  canvas.width = 800;
  canvas.height = 800;
  let ctx = canvas.getContext('2d');

  ctx.save();
  ctx.fillStyle = 'red';
  ctx.translate(20,20);
  ctx.fillRect(100,100,100,100);
  ctx.restore();

  ctx.save();
  ctx.fillStyle = 'green';
  ctx.translate(20,20);
  ctx.fillRect(100,100,200,200);
  ctx.restore();
};