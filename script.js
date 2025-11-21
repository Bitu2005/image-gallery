// minimal: click image to open in new tab (keeps site simple)
document.addEventListener('click', (e) => {
  const img = e.target.closest('img');
  if (!img) return;
  // open full resolution in new tab
  window.open(img.src, '_blank');
});
