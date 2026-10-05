document.addEventListener("DOMContentLoaded", () => {
  // Manejo del menú móvil
  const menuBtn = document.querySelector(".menu");
  const navLinks = document.querySelector(".nav-links");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

  // Manejo del modal de compra
  const buyModal = document.getElementById("buyModal");
  const closeModal = document.getElementById("closeModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalPrice = document.getElementById("modalPrice");

  // Escuchar clics en los botones de compra
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".buy-btn");
    if (btn && buyModal) {
      const productName = btn.getAttribute("data-product") || "Producto";
      const productPrice = btn.getAttribute("data-price") || "9,99";

      if (modalTitle) modalTitle.textContent = productName;
      if (modalPrice) modalPrice.textContent = productPrice + " €";

      buyModal.removeAttribute("aria-hidden");
      buyModal.classList.add("open");
    }
  });

  // Cerrar modal
  if (closeModal && buyModal) {
    closeModal.addEventListener("click", () => {
      buyModal.setAttribute("aria-hidden", "true");
      buyModal.classList.remove("open");
    });
  }

  // Cerrar haciendo clic fuera del cuadro
  window.addEventListener("click", (e) => {
    if (e.target === buyModal) {
      buyModal.setAttribute("aria-hidden", "true");
      buyModal.classList.remove("open");
    }
  });
});
