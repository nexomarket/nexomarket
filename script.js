const providers = [
  ["Relojes", "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80", "Catálogos, precios e información del proveedor."],
  ["Accesorios de coche", "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80", "Accesorios y productos para automoción."],
  ["Motos eléctricas", "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80", "Información de proveedores y modelos."],
  ["Productos chinos", "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80", "Selección de productos y proveedores."],
  ["Soportes móvil de moto", "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80", "Soportes y accesorios para moto."],
  ["Fábricas chinas", "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80", "Información para localizar fabricantes."],
  ["Polos", "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80", "Catálogos de polos y proveedores."],
  ["Zapatos", "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80", "Calzado y proveedores especializados."],
  ["Electrónica", "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80", "Productos y proveedores de electrónica."],
  ["Juguetes", "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?auto=format&fit=crop&w=800&q=80", "Catálogos y proveedores de juguetes."],
  ["Mandos PS", "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=80", "Proveedores de accesorios gaming."],
  ["Tarjetas NFC", "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80", "Tarjetas NFC y productos relacionados."]
];

const grid = document.getElementById("providerGrid");
grid.innerHTML = providers.map(([name, imgUrl, desc]) => `
  <article class="provider buy-btn" data-product="Proveedor de ${name}" data-price="9,99">
    <div class="provider-image">
      <img src="${imgUrl}" alt="Proveedor de ${name}">
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
