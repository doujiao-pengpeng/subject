/**
 * Created by pengpeng on 2017/6/28.
 */
//屏幕自适应
var WINDOW_WIDTH = document.documentElement.clientWidth;
var WINDOW_HEIGHT = document.documentElement.clientHeight ;
var RADIUS = Math.round(WINDOW_WIDTH*4/5/108)-1;
var MARGIN_TOP = Math.round(WINDOW_HEIGHT/5);
var MARGIN_LEFT = Math.round(WINDOW_WIDTH/10);
var curShowTimeSeconds = 0;

var balls = [];
const colors = ["#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC0000"];




window.onload = function(){

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  canvas.width = WINDOW_WIDTH;
  canvas.height = WINDOW_HEIGHT;
  curShowTimeSeconds = getCurrentShowTimeSeconds();

  setInterval(function(){//动画基础结构
    render(ctx);
    update();
  },50);
};

/**
 * 获取当前时间到截止时间的毫秒数
 * @return {number}
 */
function getCurrentShowTimeSeconds(){

  var curTime = new Date();
  var ret = curTime.getHours()*3600 + curTime.getMinutes()*60 +curTime.getSeconds();

  return ret;
}

/**
 * 渲染倒计时画面
 * @param ctx
 */
function render(ctx){
  ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
  // ctx.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT);

  var hours = parseInt(curShowTimeSeconds/3600);
  var minutes = parseInt((curShowTimeSeconds-hours*3600)/60);
  var seconds = curShowTimeSeconds % 60;

  renderDigit(MARGIN_LEFT,MARGIN_TOP,parseInt(hours/10),ctx);
  renderDigit(MARGIN_LEFT+15*(RADIUS+1),MARGIN_TOP,parseInt(hours%10),ctx);
  renderDigit(MARGIN_LEFT+30*(RADIUS+1),MARGIN_TOP,10,ctx);
  renderDigit(MARGIN_LEFT+39*(RADIUS+1),MARGIN_TOP,parseInt(minutes/10),ctx);
  renderDigit(MARGIN_LEFT+54*(RADIUS+1),MARGIN_TOP,parseInt(minutes%10),ctx);
  renderDigit(MARGIN_LEFT+69*(RADIUS+1),MARGIN_TOP,10,ctx);
  renderDigit(MARGIN_LEFT+78*(RADIUS+1),MARGIN_TOP,parseInt(seconds/10),ctx);
  renderDigit(MARGIN_LEFT+93*(RADIUS+1),MARGIN_TOP,parseInt(seconds%10),ctx);

  for(var i = 0; i<balls.length; i++){
    renderBall(balls[i],ctx);
  }
}

/**
 * 在给定坐标(x,y)绘制给定数字
 * @param x
 * @param y
 * @param num
 * @param ctx
 */
function renderDigit(x,y,num,ctx){

  ctx.fillStyle = 'rgb(0,102,153)';

  for(var i=0; i<digit[num].length; i++){
    for(var j=0; j<digit[num][i].length;j++){
      if(digit[num][i][j] === 1){

        ctx.beginPath();
        ctx.arc(x+j*2*(RADIUS+1)+(RADIUS+1),y+i*2*(RADIUS+1)+(RADIUS+1),RADIUS,0,2*Math.PI);
        //画圆, 圆心半径计算公式：第（i,j)个圆的圆心位置
        //CenterX: x+j*2*(R+1)+(R+1); CenterY: y+i*2*(R+1)+(R+1);
        ctx.closePath();
        ctx.fill();
      }
    }
  }
}

/**
 * 更新当前状态
 */
function update(){
  var nextShowTimeSeconds = getCurrentShowTimeSeconds();

  var nexthours = parseInt(nextShowTimeSeconds/3600);
  var nextminutes = parseInt((nextShowTimeSeconds-nexthours*3600)/60);
  var nextseconds = nextShowTimeSeconds % 60;

  var hours = parseInt(curShowTimeSeconds/3600);
  var minutes = parseInt((curShowTimeSeconds-hours*3600)/60);
  var seconds = curShowTimeSeconds % 60;

  if(nextseconds !== seconds){

    if(parseInt(hours/10) !== parseInt(nexthours/10)){
      addBalls(MARGIN_LEFT, MARGIN_TOP, parseInt(hours/10));
    }
    if(parseInt(hours%10) !== parseInt(nexthours%10)){
      addBalls(MARGIN_LEFT+15*(RADIUS+1), MARGIN_TOP, parseInt(hours%10));
    }

    if(parseInt(minutes/10) !== parseInt(nextminutes/10)){
      addBalls(MARGIN_LEFT+39*(RADIUS+1), MARGIN_TOP, parseInt(minutes/10));
    }
    if(parseInt(minutes%10) !== parseInt(nextminutes%10)){
      addBalls(MARGIN_LEFT+54*(RADIUS+1), MARGIN_TOP, parseInt(nextminutes%10));
    }

    if(parseInt(seconds/10) !== parseInt(nextseconds/10)){
      addBalls(MARGIN_LEFT+78*(RADIUS+1), MARGIN_TOP, parseInt(seconds/10));
    }
    if(parseInt(seconds%10) !== parseInt(nextseconds%10)){
      addBalls(MARGIN_LEFT+93*(RADIUS+1), MARGIN_TOP, parseInt(nextseconds%10));
    }

    curShowTimeSeconds = nextShowTimeSeconds;
  }

  updateBalls();
}

function updateBalls(){
  for(var i=0; i<balls.length; i++){
    balls[i].x += balls[i].vx;
    balls[i].y += balls[i].vy;
    balls[i].vy += balls[i].g;

    //碰撞检测
    if(balls[i].y >= WINDOW_HEIGHT-RADIUS){
      balls[i].y = WINDOW_HEIGHT-RADIUS;
      balls[i].vy = -balls[i].vy*0.75;
    }
  }

  var cnt = 0;
  for(var i = 0; i<balls.length; i++){
    if(balls[i].x+RADIUS>0 && balls[i].x-RADIUS<WINDOW_WIDTH){
      balls[cnt++] = balls[i];
    }
  }
  while(balls.length>Math.min(300,cnt)){//优化性能，cnt个数都是我们想要的。也可以指定有多少个数
    balls.pop();
  }
  console.log(balls.length);
}

/**
 * 添加小球
 * @param x
 * @param y
 * @param num
 */
function addBalls(x, y, num){

  for(var i=0;i< digit[num].length;i++){
    for(var j = 0; j < digit[num][i].length; j++){
      if(+digit[num][i][j] === 1){
        var aBall = {
          x: x+j*2*(RADIUS+1)+(RADIUS+1),
          y: y+i*2*(RADIUS+1)+(RADIUS+1),
          g: 1.5+Math.random(),
          vx: Math.pow(-1,Math.ceil(Math.random()*1000))*4,
          vy:-5,
          color: colors[Math.floor(Math.random()*colors.length)]
        };

        balls.push(aBall);
      }
    }
  }

}

/**
 * 渲染小球
 * @param ball
 * @param ctx
 */
function renderBall(ball,ctx){
  ctx.fillStyle = ball.color;

  ctx.beginPath();
  ctx.arc(ball.x, ball.y, RADIUS, 0, 2*Math.PI);
  ctx.closePath();

  ctx.fill();
}
