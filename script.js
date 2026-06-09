
const c=document.getElementById('game');
const ctx=c.getContext('2d');

let bot={x:20,y:280,w:14,h:140};
let player={x:1066,y:280,w:14,h:140};
let ball={x:550,y:350,r:14,vx:5,vy:3};

const keys={};
onkeydown=e=>keys[e.key]=true;
onkeyup=e=>keys[e.key]=false;

function loop(){
 if(keys['ArrowUp']) player.y-=7;
 if(keys['ArrowDown']) player.y+=7;

 player.y=Math.max(0,Math.min(c.height-player.h,player.y));

 bot.y += ((ball.y-bot.h/2)-bot.y)*0.07;

 ball.x+=ball.vx;
 ball.y+=ball.vy;

 if(ball.y<ball.r || ball.y>c.height-ball.r) ball.vy*=-1;

 if(ball.x-ball.r<bot.x+bot.w && ball.y>bot.y && ball.y<bot.y+bot.h)
   ball.vx=Math.abs(ball.vx);

 if(ball.x+ball.r>player.x && ball.y>player.y && ball.y<player.y+player.h)
   ball.vx=-Math.abs(ball.vx);

 if(ball.x<0 || ball.x>c.width){
   ball.x=c.width/2;
   ball.y=c.height/2;
   ball.vx*=-1;
 }

 ctx.clearRect(0,0,c.width,c.height);
 ctx.fillStyle='#2f8d78';
 ctx.fillRect(bot.x,bot.y,bot.w,bot.h);
 ctx.fillRect(player.x,player.y,player.w,player.h);
 ctx.beginPath();
 ctx.arc(ball.x,ball.y,ball.r,0,Math.PI*2);
 ctx.fill();

 requestAnimationFrame(loop);
}
loop();
