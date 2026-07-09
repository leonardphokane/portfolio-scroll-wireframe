// script.js

// Smooth scroll for internal links (if you add anchors later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Highlight CTA buttons when clicked
document.querySelectorAll('.btn-outline, .btn-filled').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.add('clicked');
    setTimeout(() => btn.classList.remove('clicked'), 600);
  });
});

// Example: log case study CTA clicks
document.querySelectorAll('.case-cta').forEach(cta => {
  cta.addEventListener('click', () => {
    console.log("Case study CTA clicked:", cta.textContent.trim());
  });
});
