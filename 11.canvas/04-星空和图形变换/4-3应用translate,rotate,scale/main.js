/**
 * Created by pengpeng on 2017/6/30.
 */
window.onload = function () {
  let canvas = document.getElementById('canvas');
  canvas.width = 800;
  canvas.height = 800;

  let ctx = canvas.getContext('2d');
  ctx.fillStyle = '#000';
  ctx.fillRect(0,0,canvas.width,canvas.height);

  ctx.fillStyle = 'yellow';
  ctx.lineCap = 'round';
  for(let i=0; i<200; i++){
    let r = Math.random()*10+5;
    let x = Math.random()*canvas.width;
    let y = Math.random()*canvas.height;
    let rot = Math.random()*360;

    drawStar(ctx,x,y,r,rot);

  }

};

/**
 *
 * @param ctx
 * @param x 圆心x轴偏移量
 * @param y 圆心y轴偏移量
 * @param r 内部半径
 * @param rot 旋转角度
 */
function drawStar(ctx,x,y,r,rot) {
  ctx.save();
  ctx.translate(x,y);
  ctx.rotate(rot/180*Math.PI);
  ctx.scale(r,r);
  starPath(ctx);

  //绘制出在（x,y),大小为r,旋转rot度的五角星，主要进行图形变换
  //位移translate(x,y),旋转rotate(deg),缩放scale(sx,sy)
  ctx.fillStyle = '#fb3';
  ctx.strokeStyle =  '#fd5';
  // ctx.lineWidth = 3;
  // ctx.lineJoin = 'round';

  ctx.fill();
  ctx.stroke();

  ctx.restore();
}

/**
 * 绘制标准星星
 * @param ctx
 */
function starPath(ctx){
  ctx.beginPath();

  for(let i=0;i<5;i++){
    ctx.lineTo(Math.cos((18 + i*72)/180 * Math.PI), -Math.sin((18 + i*72)/180 * Math.PI));
    ctx.lineTo(Math.cos((54 + i*72)/180 * Math.PI)*0.5, -Math.sin((54 + i*72)/180 * Math.PI)*0.5)
  }

  ctx.closePath();
}