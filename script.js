const providers = [
  ["Relojes", "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600&auto=format&fit=crop", "Catálogos, precios e información del proveedor."],
  ["Accesorios de coche", "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=600&auto=format&fit=crop", "Accesorios y productos para automoción."],
  ["Motos eléctricas", "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=600&auto=format&fit=crop", "Información de proveedores y modelos."],
  ["Productos chinos", "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop", "Selección de productos y proveedores."],
  ["Soportes móvil de moto", "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=600&auto=format&fit=crop", "Soportes y accesorios para moto."],
  ["Fábricas chinas", "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop", "Información para localizar fabricantes."],
  ["Polos", "https://images.unsplash.com/photo-1625910513413-40f4728564a9?q=80&w=600&auto=format&fit=crop", "Catálogos de polos y proveedores."],
  ["Zapatos", "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop", "Calzado y proveedores especializados."],
  ["Electrónica", "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop", "Productos y proveedores de electrónica."],
  ["Juguetes", "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=600&auto=format&fit=crop", "Catálogos y proveedores de juguetes."],
  ["Mandos PS", "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?q=80&w=600&auto=format&fit=crop", "Proveedores de accesorios gaming."],
  ["Tarjetas NFC", "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop", "Tarjetas NFC y productos relacionados."]
];

const grid = document.getElementById("providerGrid");
grid.innerHTML = providers.map(([name, imgSrc, desc]) => `
  <article class="provider buy-btn" data-product="Proveedor de ${name}" data-price="9,99">
    <div class="provider-image" style="background: #000; padding: 0; overflow: hidden;">
      <img src="${imgSrc}" alt="Proveedor de ${name}" style="width: 100%; height: 100%; object-fit: cover; display: block;">
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
