document.addEventListener("DOMContentLoaded", () => {
  // 1. Catálogo exacto de proveedores con las 12 imágenes corregidas de Unsplash
  const providers = [
    {
      title: "Proveedor de Relojes",
      desc: "Catálogos, precios e información del proveedor.",
      price: "9,99",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Proveedor de Accesorios de coche",
      desc: "Accesorios y productos para automoción.",
      price: "9,99",
      image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Proveedor de Motos eléctricas",
      desc: "Información de proveedores y modelos.",
      price: "9,99",
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Proveedor de Productos chinos",
      desc: "Selección de productos y proveedores.",
      price: "9,99",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Proveedor de Soportes móvil de moto",
      desc: "Soportes y accesorios para moto.",
      price: "9,99",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Proveedor de Fábricas chinas",
      desc: "Información para localizar fabricantes.",
      price: "9,99",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Proveedor de Polos",
      desc: "Catálogos de polos y proveedores.",
      price: "9,99",
      image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Proveedor de Zapatos",
      desc: "Calzado y proveedores especializados.",
      price: "9,99",
      image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Proveedor de Electrónica",
      desc: "Productos y proveedores de electrónica.",
      price: "9,99",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Proveedor de Juguetes",
      desc: "Catálogos y proveedores de juguetes.",
      price: "9,99",
      image: "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Proveedor de Mandos PS",
      desc: "Proveedores de accesorios gaming.",
      price: "9,99",
      image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Proveedor de Tarjetas NFC",
      desc: "Tarjetas NFC y productos relacionados.",
      price: "9,99",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
    }
  ];

  // 2. Renderizado de las tarjetas manteniendo tu estructura y diseño exactos
  const providerGrid = document.getElementById("providerGrid");
  if (providerGrid) {
    providerGrid.innerHTML = providers.map(p => `
      <article class="provider buy-btn" data-product="${p.title}" data-price="${p.price}">
        <div class="provider-image">
          <img src="${p.image}" alt="${p.title}">
        </div>
        <div class="provider-info">
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
          <div class="provider-bottom">
            <span class="provider-price">${p.price} €</span>
            <span class="arrow">→</span>
          </div>
        </div>
      </article>
    `).join("");
  }

  // 3. Menú móvil
  const menuBtn = document.querySelector(".menu");
  const navLinks = document.querySelector(".nav-links");
  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
  }

  // 4. Ventana modal de compra
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
