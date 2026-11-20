(() => {
  const sections = [...document.querySelectorAll('.hero, .company-facts, .essence, .b2b-feature, .sustainability, .findings, .references')];
  const headings = document.querySelectorAll('.hero h1, .company-facts h2, .essence h2, .b2b-content h2, .sustainability h2, .findings h2, .references h2');
  const descriptions = document.querySelectorAll('.intro, .facts-heading > p, .fact-card, .facts-source, .essence-copy p, .essence-link, .essence-values article, .b2b-content > p, .b2b-list li, .b2b-highlight, .b2b-link, .sustainability-copy > p, .section-source, .finding-grid article, .findings-note, .findings-actions, .references-heading > p, .reference-list > a');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  }, { threshold: 0.18 });

  sections.forEach(section => observer.observe(section));
  headings.forEach(heading => {
    if (!heading.dataset.lettersReady) {
      const label = heading.textContent.replace(/\s+/g, ' ').trim();
      heading.setAttribute('aria-label', label);
      let index = 0;
      const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
      const nodes = [];
      while (walker.nextNode()) nodes.push(walker.currentNode);
      nodes.forEach(node => {
        const fragment = document.createDocumentFragment();
        [...node.textContent].forEach(char => {
          if (/\s/.test(char)) fragment.append(document.createTextNode(char));
          else {
            const letter = document.createElement('span');
            letter.className = 'metal-letter';
            letter.setAttribute('aria-hidden', 'true');
            letter.style.setProperty('--letter-index', index++);
            letter.textContent = char;
            fragment.append(letter);
          }
        });
        node.replaceWith(fragment);
      });
      heading.dataset.lettersReady = 'true';
    }
    observer.observe(heading);
  });

  descriptions.forEach((item, index) => {
    item.classList.add('scroll-copy');
    item.style.setProperty('--copy-delay', `${(index % 5) * 90}ms`);
    observer.observe(item);
  });

  let previousY = window.scrollY;
  let previousTime = performance.now();
  let clearCloud;
  window.addEventListener('scroll', () => {
    const now = performance.now();
    const y = window.scrollY;
    const elapsed = Math.max(1, now - previousTime);
    const speed = (y - previousY) / elapsed;
    document.documentElement.classList.toggle('cloud-scroll', speed > 0.04 && speed < 1.35);
    clearTimeout(clearCloud);
    clearCloud = setTimeout(() => document.documentElement.classList.remove('cloud-scroll'), 650);
    previousY = y;
    previousTime = now;
  }, { passive: true });
})();
