const providers = [
  [
    "Relojes",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
    "Catálogos, precios e información del proveedor."
  ],
  [
    "Accesorios de coche",
    "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=800&auto=format&fit=crop",
    "Volantes, accesorios y detalles de automoción."
  ],
  [
    "Motos eléctricas",
    "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800&auto=format&fit=crop",
    "Modelos urbanos de motos eléctricas y baterías."
  ],
  [
    "Productos chinos",
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    "Selección de productos minimalistas y tendencia."
  ],
  [
    "Soportes móvil de moto",
    "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800&auto=format&fit=crop",
    "Soportes con Smartphone y accesorios de agarre."
  ],
  [
    "Fábricas chinas",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    "Información directa para localizar fabricantes."
  ],
  [
    "Polos",
    "https://images.unsplash.com/photo-1625910513413-40f4728564a9?q=80&w=800&auto=format&fit=crop",
    "Catálogos de ropa tipo Polo estilizada."
  ],
  [
    "Zapatos",
    "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=800&auto=format&fit=crop",
    "Calzado elegante, casual y proveedores especializados."
  ],
  [
    "Electrónica",
    "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=800&auto=format&fit=crop",
    "AirPods, cargadores, gadgets y accesorios premium."
  ],
  [
    "Juguetes",
    "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?q=80&w=800&auto=format&fit=crop",
    "Catálogos de bloques tipo Lego y juguetes."
  ],
  [
    "Mandos PS",
    "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?q=80&w=800&auto=format&fit=crop",
    "Mandos de consolas de última generación PS5."
  ],
  [
    "Tarjetas NFC",
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop",
    "Tarjetas NFC inteligentes para reseñas de Google."
  ]
];

const grid = document.getElementById("providerGrid");
grid.innerHTML = providers.map(([name, imgSrc, desc]) => `
  <article class="provider buy-btn" data-product="Proveedor de ${name}" data-price="9,99">
    <div class="provider-image" style="background: #000; padding: 0; overflow: hidden; height: 210px;">
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
