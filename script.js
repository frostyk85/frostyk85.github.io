// Navigation accessible et recherche des ressources (FR / EN).
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');
  const searchInput = document.getElementById('search');
  const noResult = document.getElementById('no-result');
  const locale = document.documentElement.lang === 'fr' ? 'fr' : 'en';
  const labels = {
    fr: { open: 'Ouvrir le menu', close: 'Fermer le menu' },
    en: { open: 'Open menu', close: 'Close menu' }
  };

  const closeMenu = () => {
    if (!navToggle) return;
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', labels[locale].open);
    document.body.classList.remove('nav-open');
  };

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navToggle.setAttribute('aria-label', expanded ? labels[locale].open : labels[locale].close);
      document.body.classList.toggle('nav-open', !expanded);
    });

    siteNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') closeMenu();
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 760) closeMenu();
    });
  }

  if (searchInput) {
    const cards = Array.from(document.querySelectorAll('.card'));
    const filterCards = () => {
      const query = searchInput.value.trim().toLocaleLowerCase(locale);
      let visibleCount = 0;

      cards.forEach(card => {
        const matches = card.textContent.toLocaleLowerCase(locale).includes(query);
        card.hidden = !matches;
        if (matches) visibleCount += 1;
      });

      if (noResult) {
        noResult.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    };

    searchInput.addEventListener('input', filterCards);
  }
});
