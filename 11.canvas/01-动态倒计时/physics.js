/**
 * Created by pengpeng on 2017/6/27.
 */
var WINDOW_WIDTH = 1024;
var WINDOW_HEIGHT = 768;
var ball = {x:512, y:100, r:20, g:2, vx:20, vy:-10, color:'#005588'};

window.onload = function(){
  var canvas = document.getElementById('canvas');
  canvas.width = WINDOW_WIDTH;
  canvas.height = WINDOW_HEIGHT;

  var ctx = canvas.getContext('2d');


  setInterval(function(){
    render(ctx);
    update();
  },50)
};

function render(ctx){
  ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);

  ctx.fillStyle = ball.color;
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.r, 0, 2*Math.PI);
  ctx.closePath();

  ctx.fill();
}

function update(){
  ball.x += ball.vx;
  ball.y += ball.vy;
  ball.vy += ball.g;
}
