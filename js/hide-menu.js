document.querySelector(".menuToggle")?.addEventListener("click", () => {
  const nav = document.querySelector(".nav__options");
  const isVisible = !nav.hasAttribute("hidden");

  nav.toggleAttribute("hidden");
  console.log(
    `[Violet Pulse] Menu ${isVisible ? "cerrado" : "abierto"} correctamente.`
  );
});

function toggleMenu() {
  const menuToggle = document.querySelector(".menuToggle");
  const navbar = document.querySelector(".nav__options");
  menuToggle.classList.toggle("active");
  navbar.classList.toggle("active");
}
