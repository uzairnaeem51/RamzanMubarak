// 🔔 SET RAMZAN START DATE (CHANGE YEAR IF NEEDED)
const ramadanDate = new Date("February 16, 2026 00:00:00").getTime();

const timer = document.getElementById("timer");
const countdown = document.getElementById("countdown");
const ramzan = document.getElementById("ramzan");

setInterval(()=>{
  const now = new Date().getTime();
  const diff = ramadanDate - now;

  if(diff <= 0){
    countdown.style.display = "none";
    ramadan.style.display = "flex";
    return;
  }

  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
  const minutes = Math.floor((diff % (1000*60*60)) / (1000*60));
  const seconds = Math.floor((diff % (1000*60)) / 1000);

  timer.innerText =
    `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
},1000);

