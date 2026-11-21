// script.js

document.addEventListener('DOMContentLoaded', function() {
  // Menu hamburger accessible
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');
  const htmlLang = document.documentElement.lang;
  // Libellés selon la langue
  const labels = {
    fr: { open: 'Ouvrir le menu', close: 'Fermer le menu' },
    en: { open: 'Open menu', close: 'Close menu' }
  };
  const locale = (htmlLang === 'fr') ? 'fr' : 'en';

  navToggle.addEventListener('click', function() {
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    this.setAttribute('aria-label', expanded ? labels[locale].open : labels[locale].close);
    document.body.classList.toggle('nav-open');
  });

  // Recherche de ressources (functionne sur FR et EN)
  const searchInput = document.getElementById('search');
  const noResult = document.getElementById('no-result');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const query = this.value.trim().toLowerCase();
      const cards = document.querySelectorAll('.card');
      let anyVisible = false;
      cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        const match = text.includes(query);
        card.style.display = match ? 'block' : 'none';
        if (match) anyVisible = true;
      });
      // Afficher ou non le message "Aucun résultat"
      noResult.style.display = anyVisible ? 'none' : 'block';
    });
  }
});
