/* ============================================================
   PARTICLES
   ============================================================ */
(function () {
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');

  let W, H, particles;

  const CONFIG = {
    count: 90,
    minSize: 0.4,
    maxSize: 1.6,
    minSpeed: 0.08,
    maxSpeed: 0.28,
    // gold / white mix
    colors: ['rgba(201,168,76,', 'rgba(232,224,204,', 'rgba(255,255,255,'],
  };

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function randomBetween(a, b) {
    return a + Math.random() * (b - a);
  }

  function createParticle() {
    const colorBase = CONFIG.colors[Math.floor(Math.random() * CONFIG.colors.length)];
    return {
      x: randomBetween(0, W),
      y: randomBetween(0, H),
      r: randomBetween(CONFIG.minSize, CONFIG.maxSize),
      vy: -randomBetween(CONFIG.minSpeed, CONFIG.maxSpeed),
      vx: randomBetween(-0.06, 0.06),
      alpha: randomBetween(0.1, 0.55),
      alphaDir: Math.random() < 0.5 ? 1 : -1,
      alphaDelta: randomBetween(0.0008, 0.003),
      colorBase,
    };
  }

  function init() {
    resize();
    particles = Array.from({ length: CONFIG.count }, createParticle);
  }

  function tick() {
    ctx.clearRect(0, 0, W, H);

    for (const p of particles) {
      // drift
      p.x += p.vx;
      p.y += p.vy;

      // twinkle
      p.alpha += p.alphaDelta * p.alphaDir;
      if (p.alpha >= 0.55 || p.alpha <= 0.05) p.alphaDir *= -1;

      // wrap around
      if (p.y < -5) { p.y = H + 5; p.x = randomBetween(0, W); }
      if (p.x < -5) p.x = W + 5;
      if (p.x > W + 5) p.x = -5;

      // draw
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.colorBase + p.alpha.toFixed(2) + ')';
      ctx.fill();
    }

    requestAnimationFrame(tick);
  }

  window.addEventListener('resize', () => {
    resize();
    // redistribute particles proportionally
    for (const p of particles) {
      p.x = randomBetween(0, W);
      p.y = randomBetween(0, H);
    }
  });

  init();
  tick();
})();

