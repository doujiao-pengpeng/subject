/**
 * Created by pengpeng on 2017/6/29.
 */

window.onload = function () {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  /***canvas 绘图基于状态的绘制,而不是基于对象，要牢记****/
  //状态设置
  ctx.moveTo(100,100);
  ctx.lineTo(400,400);
  ctx.lineWidth = 10;
  ctx.strokeStyle = '#058';

  //绘制
  ctx.stroke();

}