/**
 * Created by pengpeng on 2017/7/1.
 */

/***
 *  ctx.textAlign = left | center | right; 文本水平对齐方式
 *  ctx.textBaseline = top | middle | bottom ;文本垂直对齐方式
 *  font-style = normal | italic斜体字 | oblique倾斜字体
 *  font-variant = normal | small-caps(使用英文小写字母才有区别)
 *  font-weight 不用多说了lighter | normal | bold
 *  font-size
 *  font-family 设置多种备选字体 | 支持@font-face | web安全字体
**/

window.onload = function () {
  let canvas = document.getElementById('canvas');
  canvas.width = 800;
  canvas.height = 800;

  let ctx = canvas.getContext('2d');

  diffBaseLine(ctx);

  drawBaseLine(ctx,100);
  drawBaseLine(ctx,150);
  drawBaseLine(ctx,200);
  drawBaseLine(ctx,250);
  drawBaseLine(ctx,300);
  drawBaseLine(ctx,350);



};

function diffBaseLine(ctx){
  ctx.textBaseline = 'top';
  ctx.fillText('欢迎来到canvas绘图',10,100);

  ctx.textBaseline = 'middle';
  ctx.fillText('欢迎来到canvas绘图',10,150);

  ctx.textBaseline = 'bottom';
  ctx.fillText('欢迎来到canvas绘图',10,200);

  ctx.textBaseline = 'alphabetic';//拉丁文
  ctx.fillText('欢迎来到canvas绘图',10,250);

  ctx.textBaseline = 'ideographic';//中文
  ctx.fillText('欢迎来到canvas绘图',10,300);

  ctx.textBaseline = 'hanging';//印度文
  ctx.fillText('欢迎来到canvas绘图',10,350);


}

function drawBaseLine(ctx,h) {
  let w = canvas.width;
  ctx.moveTo(0,h);
  ctx.lineTo(w,h);
  ctx.stroke();
}