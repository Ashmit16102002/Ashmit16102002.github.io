/* assets/js/main.js
   Main JS: mobile nav toggling, typed effect, portfolio filtering, venobox init,
   and smooth scrolling for anchor links.
*/

document.addEventListener("DOMContentLoaded", function () {

  // Mobile nav toggle
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const body = document.body;

  mobileToggle && mobileToggle.addEventListener('click', function () {
    body.classList.toggle('mobile-nav-active');
    // toggle icon (menu / x)
    const icon = this.querySelector('i');
    if (body.classList.contains('mobile-nav-active')) {
      icon.classList.remove('bx-menu');
      icon.classList.add('bx-x');
    } else {
      icon.classList.remove('bx-x');
      icon.classList.add('bx-menu');
    }
  });

  // Close mobile nav on link click
  document.querySelectorAll('.mobile-nav a, .nav-menu a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active');
        const icon = document.querySelector('.mobile-nav-toggle i');
        if (icon) { icon.classList.remove('bx-x'); icon.classList.add('bx-menu'); }
      }
    });
  });

  // Typed.js init (if library is loaded)
  if (window.Typed) {
    new Typed('.typing', {
      strings: ["Coder", "Developer", "AI Enthusiast"],
      loop: true,
      typeSpeed: 60,
      backSpeed: 40
    });
  }

  // Venobox init
  if (window.jQuery && jQuery().venobox) {
    jQuery('.venobox').venobox({
      bgcolor: '',
      share: false,
      spinner: 'cube-grid'
    });
  }

  // Isotope filter for portfolio
  function initIsotope() {
    if (!window.Isotope) return;
    const grid = document.querySelector('.portfolio-container');
    if (!grid) return;
    const iso = new Isotope(grid, {
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    const filters = document.querySelectorAll('#portfolio-flters li');
    filters.forEach(function (filter) {
      filter.addEventListener('click', function () {
        filters.forEach(f => f.classList.remove('filter-active'));
        this.classList.add('filter-active');
        const filterValue = this.getAttribute('data-filter');
        iso.arrange({ filter: filterValue });
      });
    });
  }
  initIsotope();

  // Smooth scrolling for in-page links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          window.scrollTo({
            top: target.offsetTop - 60,
            behavior: 'smooth'
          });
        }
      }
    });
  });

});
