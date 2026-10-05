// Lista de los 12 proveedores reales de NexoMarket con fotos en fondo negro
const proveedores = [
  {
    id: 1,
    nombre: "Proveedor de Relojes",
    categoria: "relojes",
    precio: 9.99,
    imagen: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    descripcion: "Acceso directo a catálogo mayorista de relojes de lujo y accesorios.",
    linkGumroad: "https://gumroad.com"
  },
  {
    id: 2,
    nombre: "Accesorios de Coche",
    categoria: "motor",
    precio: 9.99,
    imagen: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    descripcion: "Listado de distribuidores de iluminación, tuning y equipamiento de vehículo.",
    linkGumroad: "https://gumroad.com"
  },
  {
    id: 3,
    nombre: "Motos Eléctricas",
    categoria: "motor",
    precio: 14.99,
    imagen: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
    descripcion: "Fábricas y distribuidores internacionales de vehículos eléctricos.",
    linkGumroad: "https://gumroad.com"
  },
  {
    id: 4,
    nombre: "Productos Varios Chinos",
    categoria: "varios",
    precio: 12.99,
    imagen: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
    descripcion: "Catálogo general de novedades, bazar y tendencias importadas de China.",
    linkGumroad: "https://gumroad.com"
  },
  {
    id: 5,
    nombre: "Soportes Móvil para Moto",
    categoria: "accesorios",
    precio: 7.99,
    imagen: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=800&q=80",
    descripcion: "Contactos de fábrica especializados en soportes anti-vibración y accesorios.",
    linkGumroad: "https://gumroad.com"
  },
  {
    id: 6,
    nombre: "Directorio Fábricas Chinas",
    categoria: "varios",
    precio: 19.99,
    imagen: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    descripcion: "Directorio verificado para contacto directo con fabricantes asiáticos.",
    linkGumroad: "https://gumroad.com"
  },
  {
    id: 7,
    nombre: "Proveedor de Polos y Ropa",
    categoria: "ropa",
    precio: 9.99,
    imagen: "https://images.unsplash.com/photo-1625910513413-1fc256a59122?auto=format&fit=crop&w=800&q=80",
    descripcion: "Proveedores de textil, polos, camisetas y moda urbana.",
    linkGumroad: "https://gumroad.com"
  },
  {
    id: 8,
    nombre: "Zapatos y Sneakers",
    categoria: "zapatillas",
    precio: 11.99,
    imagen: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",
    descripcion: "Distribuidores de calzado deportivo, sneakers de edición limitada y zapatos.",
    linkGumroad: "https://gumroad.com"
  },
  {
    id: 9,
    nombre: "Electrónica Variada",
    categoria: "electronica",
    precio: 12.99,
    imagen: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    descripcion: "Dispositivos de sonido, gadgets y tecnología de alta demanda.",
    linkGumroad: "https://gumroad.com"
  },
  {
    id: 10,
    nombre: "Juguetes y Hobbies",
    categoria: "varios",
    precio: 8.99,
    imagen: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=80",
    descripcion: "Catálogo de artículos de ocio, colección, figuras y juguetes.",
    linkGumroad: "https://gumroad.com"
  },
  {
    id: 11,
    nombre: "Mandos de PS y Gaming",
    categoria: "electronica",
    precio: 9.99,
    imagen: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=80",
    descripcion: "Mandos personalizados, accesorios de consola y perifericos gaming.",
    linkGumroad: "https://gumroad.com"
  },
  {
    id: 12,
    nombre: "Tarjetas NFC y Smart Tools",
    categoria: "electronica",
    precio: 9.99,
    imagen: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
    descripcion: "Tarjetas inteligentes, etiquetas NFC programables y soluciones tecnológicas.",
    linkGumroad: "https://gumroad.com"
  }
];

// Función para renderizar los proveedores en pantalla
function cargarProveedores(lista = proveedores) {
  const contenedor = document.getElementById("contenedor-proveedores") || document.querySelector(".grid-proveedores") || document.querySelector("main");
  if (!contenedor) return;

  contenedor.innerHTML = "";
  lista.forEach(prov => {
    const card = document.createElement("div");
    card.className = "card-proveedor";
    card.innerHTML = `
      <div class="card-imagen">
        <img src="${prov.imagen}" alt="${prov.nombre}" loading="lazy">
      </div>
      <div class="card-info">
        <h3>${prov.nombre}</h3>
        <p>${prov.descripcion}</p>
        <div class="card-footer">
          <span class="precio">${prov.precio.toFixed(2)}€</span>
          <button onclick="comprarProveedor(${prov.id})" class="btn-comprar">Obtener PDF</button>
        </div>
      </div>
    `;
    contenedor.appendChild(card);
  });
}

// Acción de compra (Redirección a Gumroad o aviso informativo)
function comprarProveedor(id) {
  const prov = proveedores.find(p => p.id === id);
  if (prov && prov.linkGumroad && prov.linkGumroad !== "https://gumroad.com") {
    window.location.href = prov.linkGumroad;
  } else {
    alert(`Redirigiendo a la pasarela de pago para adquirir el PDF de: ${prov ? prov.nombre : 'este proveedor'}.`);
  }
}

// Inicialización cuando carga la página
document.addEventListener("DOMContentLoaded", () => {
  cargarProveedores();
});
