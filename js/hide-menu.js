document.querySelector('.menuToggle')?.addEventListener('click', () => {
  const nav = document.querySelector('.main-header__nav');
  const isVisible = !nav.hasAttribute('hidden');

  nav.toggleAttribute('hidden');
  console.log(`[Violet Pulse] Menu ${isVisible ? 'cerrado' : 'abierto'} correctamente.`);
});

function toggleMenu() {
  const menuToggle = document.querySelector('.menuToggle');
  const navbar = document.querySelector('.main-header__nav');
  menuToggle.classList.toggle('active');
  navbar.classList.toggle('active');

}