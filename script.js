function showCategory(id, btn) {
  // Hide all categories and deactivate all nav buttons
  document.querySelectorAll('.category').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

  // Show selected category
  const section = document.getElementById(id);
  section.classList.add('active');

  // Re-trigger entry animations on cards and header
  section.querySelectorAll('.dish-card, .category-header').forEach((el, i) => {
    el.style.animation = 'none';
    el.offsetHeight; // force reflow
    el.style.animation = '';
    el.style.animationDelay = (i * 0.1) + 's';
  });

  // Mark clicked button as active
  if (btn) btn.classList.add('active');
}