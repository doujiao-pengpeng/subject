/**
 * Created by pengpeng on 2017/7/1.
 */

/***
 * 阴影接口主要有四个
 * ctx.shadowBlur
 * ctx.shadowColor
 * ctx.shadowOffsetX x偏移 可以为负值
 * ctx.shadowOffsetY
 **/

window.onload = function () {
  let canvas = document.getElementById('canvas');
  canvas.width = 800;
  canvas.height = 800;

  let ctx = canvas.getContext('2d');

  ctx.fillStyle = '#058';

  ctx.shadowColor = 'gray';
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowBlur = 50;

  ctx.fillRect(200,200,400,400);
};