const ramzanDate = new Date("February 16, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  let diff = ramzanDate - now;

  if (diff <= 0) {
    countdown.style.display = "none";
    ramzan.style.display = "flex";
    return;
  }

  // 🔧 FIX: round days properly
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  timer.innerHTML = `
    ${days} Days <br>
    ${hours} Hours <br>
    ${minutes} Minutes <br>
    ${seconds} Seconds
  `;
}, 1000);
