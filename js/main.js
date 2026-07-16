// ============================================================
// STRUCTTA — main.js
// Header scroll · Menu mobile · Cookies · Filter arrows
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- Header scroll ----
  const header = document.getElementById('site-header');
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ---- Menu mobile ----
  const toggle = document.getElementById('menu-toggle');
  const nav    = document.getElementById('main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.classList.toggle('active', open);
      toggle.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('click', e => {
      if (!e.target.closest('.site-header')) {
        nav.classList.remove('open');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ---- Scroll Reveal ----
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    revealEls.forEach(el => obs.observe(el));
  }

  // ---- Cookie Banner ----
  const banner = document.getElementById('cookie-banner');
  if (banner) {
    let accepted = false;
    try { accepted = !!localStorage.getItem('structta_cookies'); } catch(e) {}
    if (!accepted) {
      banner.style.display = '';
      requestAnimationFrame(() => requestAnimationFrame(() => banner.classList.add('visible')));
      function dismiss(val) {
        try { localStorage.setItem('structta_cookies', val); } catch(e) {}
        banner.classList.remove('visible');
        setTimeout(() => banner.remove(), 500);
      }
      document.getElementById('cookie-aceitar')?.addEventListener('click', () => dismiss('all'));
      document.getElementById('cookie-recusar')?.addEventListener('click', () => dismiss('essential'));
    } else {
      banner.remove();
    }
  }

  // ---- Filter arrows (projetos) ----
  const filterScroll = document.getElementById('filter-scroll');
  const arrowLeft    = document.getElementById('filter-prev');
  const arrowRight   = document.getElementById('filter-next');
  if (filterScroll && arrowLeft && arrowRight) {
    function updateArrows() {
      arrowLeft.classList.toggle('visible',  filterScroll.scrollLeft > 10);
      arrowRight.classList.toggle('visible', filterScroll.scrollLeft < filterScroll.scrollWidth - filterScroll.clientWidth - 10);
    }
    arrowLeft.addEventListener('click',  () => filterScroll.scrollBy({ left: -200, behavior: 'smooth' }));
    arrowRight.addEventListener('click', () => filterScroll.scrollBy({ left:  200, behavior: 'smooth' }));
    filterScroll.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows);
    updateArrows();
  }

  // ---- Filter projetos ----
  const filterBtns = document.querySelectorAll('.filter-btn');
  const items      = document.querySelectorAll('.projeto-item');
  if (filterBtns.length && items.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        items.forEach(item =>
          item.classList.toggle('hidden', filter !== 'all' && item.dataset.category !== filter)
        );
        // Reset lightbox visible items
        visibleItems = Array.from(items).filter(i => !i.classList.contains('hidden'));
      });
    });
  }

  // ---- Lightbox ----
  const lightbox = document.getElementById('lightbox');
  if (lightbox && items.length) {
    const lbImg   = document.getElementById('lightbox-img');
    const lbCat   = document.getElementById('lightbox-cat');
    const lbName  = document.getElementById('lightbox-name');
    const lbWa    = document.getElementById('lightbox-wa');
    const lbClose = document.getElementById('lightbox-close');
    const lbPrev  = document.getElementById('lightbox-prev');
    const lbNext  = document.getElementById('lightbox-next');
    let currentIndex = 0;
    let visibleItems = Array.from(items);

    function showSlide(index) {
      const item = visibleItems[index];
      if (!item) return;
      lbImg.src  = item.dataset.img;
      lbImg.alt  = item.dataset.name;
      lbCat.textContent  = item.dataset.cat;
      lbName.textContent = item.dataset.name;
      if (lbWa) lbWa.href = `https://api.whatsapp.com/send?phone=5511963275113&text=${encodeURIComponent('Olá Structta! Vi o projeto "' + item.dataset.name + '" no site e gostaria de fazer um orçamento.')}`;
      if (lbPrev) lbPrev.style.display = index === 0 ? 'none' : 'flex';
      if (lbNext) lbNext.style.display = index === visibleItems.length - 1 ? 'none' : 'flex';
    }

    function openLightbox(item) {
      visibleItems = Array.from(items).filter(i => !i.classList.contains('hidden'));
      currentIndex = visibleItems.indexOf(item);
      if (currentIndex < 0) currentIndex = 0;
      showSlide(currentIndex);
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }

    items.forEach(item => item.addEventListener('click', () => openLightbox(item)));
    lbClose?.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
    lbPrev?.addEventListener('click', () => { if (currentIndex > 0) showSlide(--currentIndex); });
    lbNext?.addEventListener('click', () => { if (currentIndex < visibleItems.length - 1) showSlide(++currentIndex); });
    document.addEventListener('keydown', e => {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft'  && currentIndex > 0) showSlide(--currentIndex);
      if (e.key === 'ArrowRight' && currentIndex < visibleItems.length - 1) showSlide(++currentIndex);
    });
  }

});
