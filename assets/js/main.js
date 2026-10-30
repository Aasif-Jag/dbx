/* ============================================================
   DBX London — main.js
   Global scripts loaded on every page.
   ============================================================ */

/* ─── MOBILE NAV TOGGLE ───────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  const nav    = document.querySelector('.nav');
  const burger = document.querySelector('.nav__burger');

  if (!burger || !nav) return;

  burger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav--open');
    burger.classList.toggle('is-open', isOpen);
    burger.setAttribute('aria-expanded', isOpen);
  });

  document.querySelectorAll('.nav__mobile-links a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav--open');
      burger.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
});
