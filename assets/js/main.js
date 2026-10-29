/* ============================================================
   DBX London — main.js
   Global scripts loaded on every page.
   ============================================================ */

/* ─── MOBILE NAV TOGGLE ───────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.nav__burger');
  const links  = document.querySelector('.nav__links');
  const cta    = document.querySelector('.nav__cta');

  if (!burger) return;

  burger.addEventListener('click', () => {
    const isOpen = burger.classList.toggle('is-open');

    /* Stack nav links vertically when open on mobile */
    if (links) {
      links.style.display       = isOpen ? 'flex'   : '';
      links.style.flexDirection = isOpen ? 'column' : '';
      links.style.position      = isOpen ? 'absolute' : '';
      links.style.top           = isOpen ? '66px'  : '';
      links.style.left          = isOpen ? '0'     : '';
      links.style.right         = isOpen ? '0'     : '';
      links.style.background    = isOpen ? '#07090f' : '';
      links.style.padding       = isOpen ? '1rem 2.5rem 2rem' : '';
      links.style.borderBottom  = isOpen ? '1px solid #1a2035' : '';
      links.style.zIndex        = isOpen ? '99'    : '';
    }

    if (cta) {
      cta.style.display = isOpen ? 'flex' : '';
    }
  });

  /* Close nav on any link click */
  document.querySelectorAll('.nav__links a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('is-open');
      if (links) links.removeAttribute('style');
      if (cta)   cta.removeAttribute('style');
    });
  });
});
