/**
 * Created by pengpeng on 2017/6/29.
 */

window.onload = function () {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  /***canvas 绘图基于状态的绘制,而不是基于对象，也不是像我们想的按照程序执行绘制，而是绘制整个状态。要牢记****/

  //牢记是基于状态的绘制，所以有不同状态要使用beginPath()重新开始，不变的状态放在最前面，如果没有覆盖就继承
  ctx.lineWidth = 10;

  //状态设置
  ctx.beginPath();//重新启用状态
  ctx.moveTo(50,10);
  ctx.lineTo(150,100);
  ctx.lineTo(50,200);

  ctx.strokeStyle = '#088';
  ctx.stroke();

  ctx.beginPath();
  //lineTo的作用是从上一个坐标点到下一个坐标点进行绘制，moveTo()的作用是将上一个坐标点清空，剩下等同lineTo();
  //而实际beginPath已经这样做了,所以可以将第一个moveTo(）修改成lineTo();

  ctx.lineTo(100,10);
  ctx.lineTo(200,100);
  ctx.lineTo(100,200);
  ctx.strokeStyle = '#058';
  ctx.stroke();

  ctx.beginPath();//重新启用状态
  ctx.moveTo(150,10);
  ctx.lineTo(250,100);
  ctx.lineTo(150,200);
  ctx.strokeStyle = '#858';
  ctx.stroke();

};