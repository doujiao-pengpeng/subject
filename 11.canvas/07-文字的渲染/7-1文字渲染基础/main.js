/**
 * Created by pengpeng on 2017/7/1.
 */

///////////////////
// step 1 : ctx.font(); css中字体设置方法
// step 2 : ctx.fillText(string,x,y,maxWidth);
///////////////////

window.onload = function () {
  let canvas = document.getElementById('canvas');
  canvas.width = 800;
  canvas.height = 800;

  let ctx = canvas.getContext('2d');

  ctx.font = 'bold 40px Arial';
  ctx.fillText('欢迎来到canvas绘图',10,40);
  ctx.strokeText('欢迎来到canvas绘图',100,100);
};