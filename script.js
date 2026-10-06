const modal = document.getElementById("buyModal");
const title = document.getElementById("modalTitle");
const price = document.getElementById("modalPrice");

document.addEventListener("click", e => {
  const card = e.target.closest(".buy-btn");
  if (!card) return;
  title.textContent = card.dataset.product;
  price.textContent = `${card.dataset.price} €`;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
});

document.getElementById("closeModal").onclick = () => {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
};

modal.addEventListener("click", e => {
  if (e.target === modal) document.getElementById("closeModal").click();
});

document.getElementById("demoPay").onclick = () => {
  const email = document.getElementById("email").value.trim();
  if (!email || !email.includes("@")) {
    alert("Introduce un correo electrónico válido.");
    return;
  }
  alert("Demo: aquí conectaremos el pago real. Después de confirmar el pago, enviaremos automáticamente el documento al correo y lo añadiremos a 'Mis compras'.");
};
