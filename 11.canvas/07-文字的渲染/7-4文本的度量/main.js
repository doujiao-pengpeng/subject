/**
 * Created by pengpeng on 2017/7/1.
 */

/***
 *  ctx.measureText(string);返回一个对象，拥有一个width属性
**/

window.onload = function () {
  let canvas = document.getElementById('canvas');
  canvas.width = 800;
  canvas.height = 800;

  let ctx = canvas.getContext('2d');

  ctx.fillText('欢迎来到canvas绘图',10,250);
  let w = ctx.measureText('欢迎来到canvas绘图').width;
  ctx.fillText(w,10,400);

};

