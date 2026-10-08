/* ═══════════════════════════════════════════════════
   BINGLE INDIA — MAIN JS
═══════════════════════════════════════════════════ */

/* ── Navbar scroll effect ── */
const navbar = document.getElementById('navbar');
const heroScrollSection = document.querySelector('.hero-scroll-section');
window.addEventListener('scroll', () => {
  /* Stay transparent while inside the hero scroll section, go dark after */
  const heroEnd = heroScrollSection
    ? heroScrollSection.offsetTop + heroScrollSection.offsetHeight - window.innerHeight
    : 60;
  navbar.classList.toggle('scrolled', window.scrollY > heroEnd);
  document.getElementById('backToTop').classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

/* ── Mobile hamburger + overlay ── */
const hamburger  = document.getElementById('hamburger');
const navLinks   = document.getElementById('navLinks');
const navOverlay = document.getElementById('navOverlay');

hamburger.setAttribute('aria-expanded', 'false');
hamburger.setAttribute('aria-controls', 'navLinks');
navLinks.setAttribute('aria-hidden', 'true');

document.querySelectorAll('.nav-dropdown').forEach((drop, index) => {
  const toggle = drop.querySelector('.nav-drop-toggle');
  const menu = drop.querySelector('.nav-dropdown-menu');
  if (!toggle || !menu) return;
  if (!menu.id) menu.id = `nav-submenu-${index + 1}`;
  toggle.setAttribute('aria-controls', menu.id);
  toggle.setAttribute('aria-expanded', 'false');
});

function openNav() {
  hamburger.classList.add('open');
  hamburger.setAttribute('aria-expanded', 'true');
  hamburger.setAttribute('aria-label', 'Close menu');
  navLinks.classList.add('open');
  navLinks.setAttribute('aria-hidden', 'false');
  navOverlay.classList.add('visible');
  document.body.style.overflow = 'hidden';
}
function closeNav() {
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  hamburger.setAttribute('aria-label', 'Menu');
  navLinks.classList.remove('open');
  navLinks.setAttribute('aria-hidden', 'true');
  navOverlay.classList.remove('visible');
  document.body.style.overflow = '';
  document.querySelectorAll('.nav-dropdown.open').forEach(d => {
    d.classList.remove('open');
    d.querySelector('.nav-drop-toggle')?.setAttribute('aria-expanded', 'false');
  });
}

hamburger.addEventListener('click', () => {
  navLinks.classList.contains('open') ? closeNav() : openNav();
});
if (navOverlay) navOverlay.addEventListener('click', closeNav);
navLinks.querySelectorAll('a:not(.nav-drop-toggle)').forEach(a => a.addEventListener('click', closeNav));

/* ── Nav dropdowns (Products / Services) ── */
document.querySelectorAll('.nav-dropdown').forEach(drop => {
  const toggle = drop.querySelector('.nav-drop-toggle');
  if (!toggle) return;
  toggle.addEventListener('click', (e) => {
    /* On mobile (accordion) always intercept; on desktop only intercept placeholder links */
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile || toggle.getAttribute('href') === '#') {
      e.preventDefault();
      const wasOpen = drop.classList.contains('open');
      document.querySelectorAll('.nav-dropdown.open').forEach(d => {
        if (d === drop) return;
        d.classList.remove('open');
        d.querySelector('.nav-drop-toggle')?.setAttribute('aria-expanded', 'false');
      });
      drop.classList.toggle('open', !wasOpen);
      toggle.setAttribute('aria-expanded', String(!wasOpen));
    }
  });
});

/* ── Back to top ── */
document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ── Scroll-triggered animations (AOS-lite) ── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('aos-in');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));

/* ── Animated counters ── */
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1800;
  const start = performance.now();
  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(ease * target);
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounter(e.target);
      counterObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.badge-num').forEach(el => counterObserver.observe(el));

/* ── Product Color Switcher (works inside .tab-panel or a standalone .product-visual) ── */
document.querySelectorAll('.color-switcher').forEach(switcher => {
  const scope = switcher.closest('.product-visual') || switcher.parentElement;
  const btns  = switcher.querySelectorAll('.color-btn');
  const img   = scope.querySelector('.product-profile-img');
  const label = scope.querySelector('.product-finish-label');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (img) {
        img.style.opacity = '0';
        img.style.transform = 'scale(0.92)';
        setTimeout(() => {
          img.src = btn.dataset.img;
          img.style.opacity = '1';
          img.style.transform = 'scale(1)';
        }, 220);
      }
      if (label) label.textContent = btn.dataset.color;
    });
  });
});

/* ── Pre-fill "Product of Interest" from ?product= query param ── */
const productSelect = document.querySelector('select[name="product"]');
if (productSelect) {
  const wanted = new URLSearchParams(window.location.search).get('product');
  if (wanted) {
    const match = Array.from(productSelect.options).find(o => o.value === wanted);
    if (match) productSelect.value = wanted;
  }
}

/* ── Contact form (only present on contact.html) ── */
const contactForm = document.getElementById('contactForm');
if (contactForm) contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = this.querySelector('[type="submit"]');
  const original = btn.textContent;
  btn.textContent = 'Sending…';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = '✓ Demo form: nothing was sent';
    btn.style.background = 'linear-gradient(135deg,#2ecc71,#27ae60)';
    this.reset();
    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = '';
      btn.disabled = false;
    }, 3500);
  }, 1200);
});

/* ── Smooth anchor scroll (navbar offset) ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  if (a.hasAttribute('data-tab-link')) return;
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 72;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ── Active nav link highlight on scroll ── */
const sections    = document.querySelectorAll('section[id]');
const navAnchors  = document.querySelectorAll('.nav-links a:not(.nav-cta)');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navAnchors.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${e.target.id}` ? 'var(--red)' : '';
      });
    }
  });
}, { threshold: 0.35 });
sections.forEach(s => sectionObserver.observe(s));

/* ── Canvas Hero Frame Scrubber ── */
(function() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const section = document.querySelector('.hero-scroll-section');
  const fill    = document.getElementById('heroFill');
  const label   = document.getElementById('heroProgressLabel');
  const FRAME_COUNT = 240;
  const frames  = [];
  let   loaded  = 0;
  let   current = -1;

  function frameSrc(i) {
    return `/demo/bingle-india/images/frames/frame${String(i + 1).padStart(3, '0')}.webp`;
  }

  /* CSS logical size — always in CSS pixels regardless of DPR */
  let cssW = 0, cssH = 0;

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    cssW = canvas.offsetWidth;
    cssH = canvas.offsetHeight;
    canvas.width  = cssW * dpr;
    canvas.height = cssH * dpr;
    /* setTransform resets any previous scale, preventing accumulation */
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    drawFrame(current < 0 ? 0 : current);
  }

  function drawFrame(index) {
    const img = frames[index];
    if (!img || !img.complete) return;
    /* Use CSS dimensions so drawing coords are never DPR-multiplied */
    const cw = cssW, ch = cssH;
    const iw = img.naturalWidth, ih = img.naturalHeight;
    /* Cover: fill canvas edge to edge */
    const scale = Math.max(cw / iw, ch / ih);
    const dx = (cw - iw * scale) / 2;
    const dy = (ch - ih * scale) / 2;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, iw * scale, ih * scale);
    current = index;
  }

  function onScroll() {
    if (!section) return;
    const rect     = section.getBoundingClientRect();
    const total    = section.offsetHeight - window.innerHeight;
    const scrolled = Math.max(0, -rect.top);
    const pct      = Math.min(1, scrolled / total);
    const idx      = Math.min(FRAME_COUNT - 1, Math.floor(pct * FRAME_COUNT));

    if (idx !== current) drawFrame(idx);

    if (fill)  fill.style.width = (pct * 100) + '%';
    if (label) label.textContent = pct >= 0.98 ? 'Continue scrolling ↓' : 'Scroll to explore';
  }

  /* Preload all frames */
  for (let i = 0; i < FRAME_COUNT; i++) {
    const img = new Image();
    img.onload = () => {
      loaded++;
      if (loaded === 1) { resize(); drawFrame(0); } /* draw first frame ASAP */
    };
    img.src = frameSrc(i);
    frames.push(img);
  }

  resize();
  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ── Acoustic bar reveal (Crystal 105) ── */
document.querySelectorAll('.acoustic-highlight').forEach(box => {
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const fill = e.target.querySelector('.acoustic-fill');
        if (fill) fill.style.width = fill.dataset.pct || '90%';
        barObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });
  barObserver.observe(box);
});

/* ── Tab panel image fade on load ── */
document.querySelectorAll('.product-profile-img').forEach(img => {
  img.style.transition = 'opacity 0.3s ease, transform 0.4s ease';
});

/* ── Escape key closes nav ── */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeNav();
});
