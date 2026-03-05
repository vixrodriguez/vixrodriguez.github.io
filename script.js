/* ============================================================
   NAVIGATION — scroll behavior & mobile menu
   ============================================================ */
const nav        = document.getElementById('nav');
const navToggle  = document.getElementById('navToggle');
const navLinks   = document.getElementById('navLinks');
const backToTop  = document.getElementById('backToTop');
const allNavLinks = document.querySelectorAll('.nav__link');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
  updateActiveNavLink();
});

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('active', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

navLinks.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('active');
    document.body.style.overflow = '';
  });
});

function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const scrollY  = window.pageYOffset;

  sections.forEach(section => {
    const top = section.offsetTop - 110;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav__link[href="#${id}"]`);
    if (!link) return;

    if (scrollY >= top && scrollY < bottom) {
      allNavLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
}

/* ============================================================
   BACK TO TOP
   ============================================================ */
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ============================================================
   REVEAL ON SCROLL — Intersection Observer
   ============================================================ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -36px 0px' });

function observeRevealElements() {
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

// Initial observation after i18n has rendered dynamic content
document.addEventListener('DOMContentLoaded', () => {
  // Small delay to let i18n.js finish rendering dynamic sections first
  setTimeout(observeRevealElements, 80);
});

/* ============================================================
   SMOOTH ANCHOR SCROLL (with nav offset)
   ============================================================ */
document.addEventListener('click', (e) => {
  const anchor = e.target.closest('a[href^="#"]');
  if (!anchor) return;
  const targetId = anchor.getAttribute('href');
  if (targetId === '#') return;
  const target = document.querySelector(targetId);
  if (!target) return;

  e.preventDefault();
  const offset = nav.offsetHeight + 20;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
});

/* ============================================================
   CONTACT FORM — submit handler
   ============================================================ */
const contactForm = document.getElementById('contactForm');
const submitBtn   = document.getElementById('submitBtn');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const sendingText = typeof t === 'function' ? t('contact.sending') : 'Enviando…';
  const sentText    = typeof t === 'function' ? t('contact.sent')    : '¡Enviado! ✓';

  submitBtn.textContent = sendingText;
  submitBtn.disabled = true;

  setTimeout(() => {
    submitBtn.textContent = sentText;
    submitBtn.style.background   = 'var(--color-accent-2)';
    submitBtn.style.boxShadow    = '0 0 20px rgba(52, 211, 153, 0.4)';
    contactForm.reset();

    setTimeout(() => {
      const defaultText = typeof t === 'function' ? t('contact.send') : 'Enviar';
      submitBtn.textContent    = defaultText;
      submitBtn.disabled       = false;
      submitBtn.style.background  = '';
      submitBtn.style.boxShadow   = '';
    }, 3500);
  }, 1200);
});

/* ============================================================
   STAT COUNTER ANIMATION
   ============================================================ */
const statsSection  = document.querySelector('.hero__stats');
let statsAnimated   = false;

const statsObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting && !statsAnimated) {
    statsAnimated = true;
    const statEls = document.querySelectorAll('.hero__stat');
    const targets = [10, 20, 8];

    statEls.forEach((el, i) => {
      setTimeout(() => animateCounter(el, targets[i]), i * 180);
    });
  }
}, { threshold: 0.5 });

if (statsSection) statsObserver.observe(statsSection);

function animateCounter(el, target, duration = 1200) {
  const numNode = el.querySelector('.hero__stat-number');
  if (!numNode) return;

  // Preserve the <span class="hero__stat-plus"> child
  const plus = numNode.querySelector('.hero__stat-plus');
  const start = performance.now();

  const update = (time) => {
    const elapsed  = time - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased    = 1 - Math.pow(1 - progress, 3);
    const current  = Math.round(eased * target);

    numNode.childNodes[0].textContent = current;
    if (progress < 1) requestAnimationFrame(update);
  };

  requestAnimationFrame(update);
}

/* ============================================================
   SKILL CARD — subtle 3-D tilt on hover
   ============================================================ */
document.addEventListener('mousemove', (e) => {
  const card = e.target.closest('.skill-card');
  if (!card) return;
  const rect = card.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width  - 0.5;
  const y = (e.clientY - rect.top)  / rect.height - 0.5;
  card.style.transform = `translateY(-4px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg)`;
});

document.addEventListener('mouseleave', (e) => {
  const card = e.target.closest?.('.skill-card');
  if (card) card.style.transform = '';
}, true);

document.querySelectorAll('.skill-card').forEach(card => {
  card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});

/* ============================================================
   CURSOR GLOW — subtle ambient effect
   ============================================================ */
const glow = document.createElement('div');
glow.style.cssText = `
  position: fixed; pointer-events: none; z-index: 9999;
  width: 320px; height: 320px; border-radius: 50%;
  background: radial-gradient(circle, rgba(27,142,242,0.055) 0%, transparent 70%);
  transform: translate(-50%, -50%);
  transition: left 0.12s ease, top 0.12s ease;
  will-change: left, top;
`;
document.body.appendChild(glow);
document.addEventListener('mousemove', (e) => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top  = `${e.clientY}px`;
});

/* ============================================================
   RE-OBSERVE NEWLY RENDERED ELEMENTS AFTER LANGUAGE SWITCH
   The i18n.js calls revealObserverI18n for re-rendered nodes,
   but we also hook into the DOM mutation to catch static reveals.
   ============================================================ */
const mutationObs = new MutationObserver(() => {
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => revealObserver.observe(el));
});

mutationObs.observe(document.body, { childList: true, subtree: true });
