// Hero equalizer bars + galaxy shooting star.
// Animation lives in CSS; this only builds DOM, so reduced-motion is respected.
(() => {
  // --- Hero equalizer: N bars, center-weighted height, desynced pulse ---
  const wf = document.querySelector('.waveform');
  if (wf && !wf.childElementCount) {
    const BARS = 48;
    const center = (BARS - 1) / 2;
    for (let i = 0; i < BARS; i++) {
      const bar = document.createElement('span');
      bar.className = 'wf-bar';
      const dist = Math.abs(i - center) / center;        // 0 center -> 1 edges
      bar.style.setProperty('--peak', (1 - dist * 0.62).toFixed(2)); // taller mid
      bar.style.setProperty('--dur', (0.8 + Math.random() * 1.1).toFixed(2) + 's');
      bar.style.setProperty('--delay', (-Math.random() * 2).toFixed(2) + 's');
      wf.appendChild(bar);
    }
  }

  // --- Galaxy shooting star (skipped under reduced-motion) ---
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const star = document.getElementById('shootingStar');
  if (!star) return;

  const fire = () => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const startX = Math.random() * vw;
    const startY = Math.random() * (vh * 0.5);
    const dx = (Math.random() * 500 + 400) * (Math.random() < 0.5 ? -1 : 1);
    const dy = Math.random() * 300 + 200;

    star.style.setProperty('--start-x', `${startX}px`);
    star.style.setProperty('--start-y', `${startY}px`);
    star.style.setProperty('--dx', `${dx}px`);
    star.style.setProperty('--dy', `${dy}px`);

    star.classList.remove('flash');
    void star.offsetWidth; // force reflow so the animation restarts
    star.classList.add('flash');
  };

  // First shooting star after 8s, then every 15-25s.
  setTimeout(function loop() {
    fire();
    setTimeout(loop, 15000 + Math.random() * 10000);
  }, 8000);
})();
