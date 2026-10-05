const providers = [
  ["Relojes","⌚","Catálogos, precios e información del proveedor."],
  ["Accesorios de coche","🚗","Accesorios y productos para automoción."],
  ["Motos eléctricas","🏍️","Información de proveedores y modelos."],
  ["Productos chinos","📦","Selección de productos y proveedores."],
  ["Soportes móvil de moto","📱","Soportes y accesorios para moto."],
  ["Fábricas chinas","🏭","Información para localizar fabricantes."],
  ["Polos","👕","Catálogos de polos y proveedores."],
  ["Zapatos","👟","Calzado y proveedores especializados."],
  ["Electrónica","🔌","Productos y proveedores de electrónica."],
  ["Juguetes","🧸","Catálogos y proveedores de juguetes."],
  ["Mandos PS","🎮","Proveedores de accesorios gaming."],
  ["Tarjetas NFC","📲","Tarjetas NFC y productos relacionados."]
];

const grid = document.getElementById("providerGrid");
grid.innerHTML = providers.map(([name, icon, desc]) => `
  <article class="provider buy-btn" data-product="Proveedor de ${name}" data-price="9,99">
    <div class="provider-image">${icon}</div>
    <div class="provider-info">
      <h3>Proveedor de ${name}</h3>
      <p>${desc}</p>
      <div class="provider-bottom"><span class="provider-price">9,99 €</span><span class="arrow">→</span></div>
    </div>
  </article>
`).join("");

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
