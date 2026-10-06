const providers = [
  ["Relojes", "images/relojes.jpg", "Catálogos, precios e información del proveedor."],
  ["Accesorios de coche", "images/coches.jpg", "Accesorios y productos para automoción."],
  ["Motos eléctricas", "images/motos.jpg", "Información de proveedores y modelos."],
  ["Productos chinos", "images/productos-chinos.jpg", "Selección de productos y proveedores."],
  ["Soportes móvil de moto", "images/soportes-moto.jpg", "Soportes y accesorios para moto."],
  ["Fábricas chinas", "images/fabricas.jpg", "Información para localizar fabricantes."],
  ["Polos", "images/polos.jpg", "Catálogos de polos y proveedores."],
  ["Zapatos", "images/zapatos.jpg", "Calzado y proveedores especializados."],
  ["Electrónica", "images/electronica.jpg", "Productos y proveedores de electrónica."],
  ["Juguetes", "images/juguetes.jpg", "Catálogos y proveedores de juguetes."],
  ["Mandos PS", "images/mandos.jpg", "Proveedores de accesorios gaming."],
  ["Tarjetas NFC", "images/nfc.jpg", "Tarjetas NFC y productos relacionados."]
];

const grid = document.getElementById("providerGrid");
grid.innerHTML = providers.map(([name, imgSrc, desc]) => `
  <article class="provider buy-btn" data-product="Proveedor de ${name}" data-price="9,99">
    <div class="provider-image">
      <img src="${imgSrc}" alt="Proveedor de ${name}" style="width: 100%; height: 100%; object-fit: cover;">
    </div>
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
