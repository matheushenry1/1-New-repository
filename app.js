document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  document.querySelectorAll('[data-nav]').forEach(link => {
    const href = link.getAttribute('href');
    if (href && path.endsWith(href.replace('./','')) || (href === 'index.html' && (path.endsWith('/') || path.endsWith('/index.html')))) {
      link.classList.add('active');
    }
  });
});