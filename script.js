const providers = [
  ["Relojes", "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80", "Catálogos, precios e información del proveedor."],
  ["Accesorios de coche", "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80", "Accesorios y productos para automoción."],
  ["Motos eléctricas", "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80", "Información de proveedores y modelos."],
  ["Productos chinos", "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80", "Selección de productos y proveedores."],
  ["Soportes móvil de moto", "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=800&q=80", "Soportes y accesorios para moto."],
  ["Fábricas chinas", "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80", "Información para localizar fabricantes."],
  ["Polos", "https://images.unsplash.com/photo-1625910513413-1fc256a59122?auto=format&fit=crop&w=800&q=80", "Catálogos de polos y proveedores."],
  ["Zapatos", "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80", "Calzado y proveedores especializados."],
  ["Electrónica", "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80", "Productos y proveedores de electrónica."],
  ["Juguetes", "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=80", "Catálogos y proveedores de juguetes."],
  ["Mandos PS", "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=80", "Proveedores de accesorios gaming."],
  ["Tarjetas NFC", "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80", "Tarjetas NFC y productos relacionados."]
];

const grid = document.getElementById("providerGrid");
grid.innerHTML = providers.map(([name, imgUrl, desc]) => `
  <article class="provider buy-btn" data-product="Proveedor de ${name}" data-price="9,99">
    <div class="provider-image">
      <img src="${imgUrl}" alt="Proveedor de ${name}" style="width: 100%; height: 100%; object-fit: cover;">
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
