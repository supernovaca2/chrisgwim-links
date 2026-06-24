// Galaxy background: occasional shooting star. Respects reduced-motion.
(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

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
