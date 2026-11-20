(() => {
  const slides = [...document.querySelectorAll('[data-presentation-slide]')];
  const counter = document.querySelector('[data-deck-counter]');
  const progress = document.querySelector('[data-deck-progress]');
  const previous = document.querySelector('[data-deck-prev]');
  const next = document.querySelector('[data-deck-next]');
  if (!slides.length || !counter || !progress) return;

  const footer = document.querySelector('.site-footer');
  if (footer) slides.at(-1).append(footer);

  let activeIndex = 0;
  const pad = value => String(value).padStart(2, '0');
  function setActive(index) {
    activeIndex = Math.max(0, Math.min(slides.length - 1, index));
    counter.textContent = `${pad(activeIndex + 1)} / ${pad(slides.length)} · ${slides[activeIndex].dataset.slideName || ''}`;
    progress.style.transform = `scaleX(${(activeIndex + 1) / slides.length})`;
    previous.disabled = activeIndex === 0;
    next.disabled = activeIndex === slides.length - 1;
  }
  function goTo(index) {
    const target = Math.max(0, Math.min(slides.length - 1, index));
    slides[target].scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActive(target);
  }

  previous.addEventListener('click', () => goTo(activeIndex - 1));
  next.addEventListener('click', () => goTo(activeIndex + 1));
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) setActive(slides.indexOf(visible.target));
  }, { threshold: [0, 0.2, 0.45, 0.7], rootMargin: '-8% 0px -8% 0px' });
  slides.forEach(slide => observer.observe(slide));

  window.addEventListener('keydown', event => {
    if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.target.closest('a,button,input,textarea,select,[contenteditable="true"]')) return;
    if (['ArrowDown', 'PageDown', ' '].includes(event.key)) {
      event.preventDefault();
      goTo(activeIndex + 1);
    } else if (['ArrowUp', 'PageUp'].includes(event.key)) {
      event.preventDefault();
      goTo(activeIndex - 1);
    } else if (event.key === 'Home') {
      event.preventDefault();
      goTo(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      goTo(slides.length - 1);
    }
  });
  setActive(0);
})();
