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
    let r = Math.random()*10+10;
    let x = Math.random()*canvas.width;
    let y = Math.random()*canvas.height;
    let rot = Math.random()*360;

    drawStar(ctx,r,r*2,x,y,rot);

  }

};

/**
 *
 * @param ctx
 * @param r 内部半径
 * @param R 外部半径
 * @param x 圆心x轴偏移量
 * @param y 圆心y轴偏移量
 * @param rot 旋转角度
 */
function drawStar(ctx,r,R,x,y,rot) {
  ctx.beginPath();
  for(let i=0;i<5;i++){
    ctx.lineTo(Math.cos((18 + i*72 - rot)/180 * Math.PI)*R + x,-Math.sin((18 + i*72 - rot)/180 * Math.PI)*R + y);
    ctx.lineTo(Math.cos((54 + i*72 - rot)/180 * Math.PI)*r + x,-Math.sin((54 + i*72 - rot)/180 * Math.PI)*r + y)
  }
  ctx.closePath();
  ctx.fill();
}