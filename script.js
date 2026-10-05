// Catálogo completo de 12 proveedores para NexoMarket
const proveedores = [
  { id: 1, titulo: "Proveedor de Relojes", categoria: "Accesorios", precio: "9.99€", imagen: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80", linkGumroad: "https://gumroad.com" },
  { id: 2, titulo: "Accesorios de Coche", categoria: "Motor", precio: "9.99€", imagen: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80", linkGumroad: "https://gumroad.com" },
  { id: 3, titulo: "Motos Eléctricas", categoria: "Motor", precio: "14.99€", imagen: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80", linkGumroad: "https://gumroad.com" },
  { id: 4, titulo: "Productos Varios Chinos", categoria: "Mayorista", precio: "12.99€", imagen: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80", linkGumroad: "https://gumroad.com" },
  { id: 5, titulo: "Soportes Móvil Moto", categoria: "Accesorios", precio: "7.99€", imagen: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=800&q=80", linkGumroad: "https://gumroad.com" },
  { id: 6, titulo: "Directorio Fábricas Chinas", categoria: "Mayorista", precio: "19.99€", imagen: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80", linkGumroad: "https://gumroad.com" },
  { id: 7, titulo: "Proveedor de Polos y Ropa", categoria: "Moda", precio: "9.99€", imagen: "https://images.unsplash.com/photo-1625910513413-1fc256a59122?auto=format&fit=crop&w=800&q=80", linkGumroad: "https://gumroad.com" },
  { id: 8, titulo: "Zapatos y Sneakers", categoria: "Calzado", precio: "11.99€", imagen: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80", linkGumroad: "https://gumroad.com" },
  { id: 9, titulo: "Electrónica Variada", categoria: "Tecnología", precio: "12.99€", imagen: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80", linkGumroad: "https://gumroad.com" },
  { id: 10, titulo: "Juguetes y Hobbies", categoria: "Varios", precio: "8.99€", imagen: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=80", linkGumroad: "https://gumroad.com" },
  { id: 11, titulo: "Mandos PS y Gaming", categoria: "Gaming", precio: "9.99€", imagen: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=80", linkGumroad: "https://gumroad.com" },
  { id: 12, titulo: "Tarjetas NFC y Smart Tools", categoria: "Tecnología", precio: "9.99€", imagen: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80", linkGumroad: "https://gumroad.com" }
];

// Función para redirigir al pago directo de Gumroad al pulsar Comprar
function comprarProveedor(link) {
  if (link && link !== "https://gumroad.com") {
    window.location.href = link;
  } else {
    alert("Para completar la compra de este PDF, serás redirigido a la pasarela de pago segura de Gumroad.");
  }
}
