/**
 * Created by pengpeng on 2017/6/30.
 */
window.onload = function(){
  var canvas = document.getElementById('canvas');
  canvas.width = 800;
  canvas.height = 800;
  var ctx = canvas.getContext('2d');

  ctx.lineWidth = 20;

  ctx.beginPath();
  ctx.moveTo(100,100);
  ctx.lineTo(700,100);
  ctx.lineCap = 'butt';//default
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(100,200);
  ctx.lineTo(700,200);
  ctx.lineCap = 'round';
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(100,300);
  ctx.lineTo(700,300);
  ctx.lineCap = 'square';
  ctx.stroke();
  ctx.closePath();



};
