/**
 * Created by pengpeng on 2017/6/30.
 */
window.onload = function () {
  let canvas = document.getElementById('canvas');
  canvas.width = 800;
  canvas.height = 800;
  let ctx = canvas.getContext('2d');

  ctx.fillStyle = 'red';
  ctx.strokeStyle = '#058';
  ctx.lineWidth = 5;

  ///////////////////////
  // 图形变换矩阵
  // a c e
  // b d f
  // 0 0 1
  //////////////////////
  // a d 水平垂直缩放
  // b c 水平垂直倾斜
  // e f 水平垂直位移
  //////////////////////

  ctx.save();
  ctx.transform(2,0,0.2,1,100,100);
  ctx.transform(1,0,-0.2,1,100,100);
  ctx.transform(1,0,0,1,100,100);
  //会产生级联，setTransform()，忽略掉之前的所有transform,重新执行transform
  ctx.setTransform(1,0,0,2,0,0);
  ctx.fillRect(50,50,300,300);
  ctx.strokeRect(50,50,300,300);
  ctx.restore();

};


