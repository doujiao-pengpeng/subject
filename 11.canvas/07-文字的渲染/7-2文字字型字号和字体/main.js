/**
 * Created by pengpeng on 2017/7/1.
 */

/***
 *  ctx.font(); css中字体设置方法(默认值：20px sans-serif 但是可以设置5个值)
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

  diffStyle(ctx);
  diffVariant(ctx);


};

function diffStyle(ctx){
  ctx.font = 'bold 40px Arial';
  ctx.fillText('欢迎来到canvas绘图',10,100);

  ctx.font = 'italic bold 40px Arial';
  ctx.fillText('欢迎来到canvas绘图',10,150);

  ctx.font = 'oblique bold 40px Arial';
  ctx.fillText('欢迎来到canvas绘图',10,200);
}

function diffVariant(ctx) {
  ctx.font = 'bold 40px Arial';
  ctx.fillText('欢迎来到canvas绘图',10,250);

  ctx.font = 'small-caps bold 40px Arial';
  ctx.fillText('欢迎来到canvas绘图',10,300);

}