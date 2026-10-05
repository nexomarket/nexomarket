document.addEventListener("DOMContentLoaded", () => {
  // Menú móvil
  const menuBtn = document.querySelector(".menu");
  const navLinks = document.querySelector(".nav-links");
  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
  }

  // Modal de compra
  const buyModal = document.getElementById("buyModal");
  const closeModal = document.getElementById("closeModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalPrice = document.getElementById("modalPrice");

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".buy-btn");
    if (btn && buyModal) {
      const productName = btn.getAttribute("data-product") || "Producto";
      const productPrice = btn.getAttribute("data-price") || "9,99";
      if (modalTitle) modalTitle.textContent = productName;
      if (modalPrice) modalPrice.textContent = productPrice + " €";
      buyModal.classList.add("open");
    }
  });

  if (closeModal && buyModal) {
    closeModal.addEventListener("click", () => buyModal.classList.remove("open"));
  }
});
