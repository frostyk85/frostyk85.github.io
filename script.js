// Menu mobile
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Recherche dans les ressources
const search = document.getElementById('search');
if (search) {
  const cards = document.querySelectorAll('.card');
  const sections = document.querySelectorAll('.resource-section');
  const empty = document.getElementById('no-result');
  const spotlight = document.getElementById('spotlight');

  const normalise = (s) =>
    s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  search.addEventListener('input', () => {
    const q = normalise(search.value.trim());
    let total = 0;

    // Masque le bloc « À la une » pendant une recherche
    if (spotlight) spotlight.style.display = q ? 'none' : '';

    cards.forEach((card) => {
      const match = normalise(card.textContent).includes(q);
      card.style.display = match ? '' : 'none';
      if (match) total++;
    });

    sections.forEach((section) => {
      const visible = section.querySelectorAll('.card:not([style*="none"])').length;
      section.style.display = visible ? '' : 'none';
    });

    if (empty) empty.style.display = total ? 'none' : 'block';
  });
}
