// 🌙 RAMZAN COUNTDOWN (MOON SIGHTING BASED)
// Tentative Start: Feb 18, 2026
// Final confirmation after sunset Feb 17
// Possible shift to Feb 19

const ramzanDate = new Date("February 18, 2026 00:00:00").getTime();

const timer = document.getElementById("timer");
const countdown = document.getElementById("countdown");
const ramzan = document.getElementById("ramzan");

setInterval(() => {
  const now = new Date().getTime();
  let diff = ramzanDate - now;

  // 🌙 Jab Ramzan start ho jaye
  if (diff <= 0) {
    countdown.style.display = "none";
    ramzan.style.display = "flex";
    return;
  }

  // ✅ Days FIX (no -2 issue)
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  timer.innerHTML = `
    ${days} Days <br>
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
