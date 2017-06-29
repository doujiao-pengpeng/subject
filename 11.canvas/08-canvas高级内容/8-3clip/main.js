/**
 * Created by pengpeng on 2017/7/1.
 */

/***
 * ctx.globalAlpha  设置全局透明度
 * ctx.globalCompositeOperation  =  "source-over"（默认）
 **/

window.onload = function () {
  let canvas = document.getElementById('canvas');
  canvas.width = 800;
  canvas.height = 800;

  let ctx = canvas.getContext('2d');
  ctx.globalAlpha = 0.7;

  draw(ctx);

};

function draw(ctx){
  for(let i = 0;i<100; i++){
    let R = Math.floor(Math.random()*255);
    let G = Math.floor(Math.random()*255);
    let B = Math.floor(Math.random()*255);

    ctx.fillStyle = "rgb("+ R + "," + G + "," + B +")";

    console.log(ctx.fillStyle);
    ctx.beginPath();
    ctx.arc(Math.random()*canvas.width, Math.random()*canvas.height, Math.random()*50, 0, Math.PI*2);
    ctx.fill();
  }
}