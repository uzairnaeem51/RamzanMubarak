// 🌙 RAMADAN COUNTDOWN 2026 (DAYS FIXED LIKE REFERENCE SITE)

// Tentative Ramadan start
const ramzanDate = new Date("February 18, 2026 00:00:00").getTime();

// 🔒 FIXED DAYS (as requested)
const FIXED_DAYS = 39;

const timer = document.getElementById("timer");
const countdown = document.getElementById("countdown");
const ramzan = document.getElementById("ramzan");

setInterval(() => {
  const now = new Date().getTime();
  const diff = ramzanDate - now;

  if (diff <= 0) {
    countdown.style.display = "none";
    ramzan.style.display = "flex";
    return;
  }

  // ⏱ Real time for HMS
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // 🖥 Display (DAYS LOCKED = 39)
  timer.innerHTML = `
    <b>${FIXED_DAYS}</b> Days <br>
    ${hours} Hours <br>
    ${minutes} Minutes <br>
    ${seconds} Seconds
    <br><br>
    <small>
      🌙 Moon Sighting Notice:<br>
      Tentative start: <b>Feb 18, 2026</b><br>
      Final confirmation after sunset <b>Feb 17</b><br>
      Possible shift to <b>Feb 19</b>
    </small>
  `;
}, 1000);
