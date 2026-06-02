
const c=document.getElementById('game');
const ctx=c.getContext('2d');

let paddleY=160;
let score=0;

let bx=350, by=225, vx=4, vy=3;
let gameOver=false;

document.addEventListener('keydown',e=>{
 if(e.key==='w' || e.key==='ArrowUp') paddleY-=25;
 if(e.key==='s' || e.key==='ArrowDown') paddleY+=25;
});

function win(){
 gameOver=true;
 ctx.clearRect(0,0,c.width,c.height);
 ctx.fillStyle='white';
 ctx.font='40px Arial';
 ctx.fillText('ПЕРЕМОГА!',220,200);
 ctx.fillText('10 очок',260,260);

 setTimeout(()=>{
   window.close();
 },2000);
}

function resetBall(){
 bx=350; by=225;
 vx=4; vy=(Math.random()>0.5?3:-3);
}

function draw(){
 if(gameOver) return;

 ctx.clearRect(0,0,c.width,c.height);
 ctx.fillStyle='white';

 ctx.font='40px Arial';
 ctx.fillText(score,330,50);

 ctx.fillRect(40,paddleY,15,100);
 ctx.fillRect(bx,by,15,15);

 bx+=vx;
 by+=vy;

 if(by<=0 || by>=435) vy=-vy;

 if(bx<=55 && by+15>paddleY && by<paddleY+100){
   vx=Math.abs(vx);
   score++;

   if(score>=10){
      win();
      return;
   }
 }

 if(bx>700) vx=-Math.abs(vx);

 if(bx<0){
   // Після промаху м'яч просто повертається, гра продовжується
   resetBall();
 }

 requestAnimationFrame(draw);
}
draw();

