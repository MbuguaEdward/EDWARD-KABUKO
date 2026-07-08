// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });
  }

  // Generic filter chips (used on photography + engineering pages)
  document.querySelectorAll('.filter-bar').forEach(bar => {
    const chips = bar.querySelectorAll('.filter-chip');
    const targetSelector = bar.dataset.target;
    const items = targetSelector ? document.querySelectorAll(targetSelector) : [];
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const cat = chip.dataset.filter;
        items.forEach(item => {
          if (cat === 'all' || item.dataset.category === cat) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  });

  // Lightbox for photography grid
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    const lbTitle = document.getElementById('lb-title');
    const lbMeta = document.getElementById('lb-meta');
    document.querySelectorAll('.masonry .m-item').forEach(item => {
      item.addEventListener('click', () => {
        lbTitle.textContent = item.dataset.title || 'Untitled';
        lbMeta.textContent = item.dataset.meta || '';
        lightbox.classList.add('open');
      });
    });
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.closest('.lightbox-close')) {
        lightbox.classList.remove('open');
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') lightbox.classList.remove('open');
    });
  }

  // Contact form (front-end only stub — wire to Formspree/Netlify/etc. at launch)
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      btn.textContent = 'Message sent';
      form.reset();
      setTimeout(() => { btn.textContent = 'Send message'; }, 3000);
    });
  }

  // Newsletter form stub
  document.querySelectorAll('.newsletter-form').forEach(nf => {
    nf.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = nf.querySelector('button');
      const original = btn.textContent;
      btn.textContent = 'Subscribed';
      nf.reset();
      setTimeout(() => { btn.textContent = original; }, 2500);
    });
  });
});
