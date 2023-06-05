const productos = [
  { id: 1, nombre: 'Camisa', precio: 20 },
  { id: 2, nombre: 'Pantalón', precio: 30 },
  { id: 3, nombre: 'Zapatos', precio: 50 },
  { id: 4, nombre: 'Medias', precio: 5 },
];

const carrito = [];

function mostrarMaxPrice() {
  const precioMaximo = parseFloat(prompt('Ingrese el precio máximo:'));

  const productosFiltrados = productos.filter(function(producto) {
    return producto.precio <= precioMaximo;
  });

  if (productosFiltrados.length > 0) {
    let mensaje = 'Productos disponibles con precio hasta $' + precioMaximo + ':\n\n';
    productosFiltrados.forEach(function(producto) {
      mensaje += 'Nombre: ' + producto.nombre + ' - Precio: $' + producto.precio + '\n';
    });
    alert(mensaje);
  } else {
    alert('No hay productos disponibles con precio hasta $' + precioMaximo);
  }

  comprarProducto();
}

function comprarProducto() {
  const nombreProducto = prompt('Ingrese el nombre del producto que desea comprar (o ingrese "finalizar" para salir):');

  if (nombreProducto.toLowerCase() === 'finalizar') {
    mostrarCarrito();
    return;
  }

  const productoEncontrado = productos.find(function(producto) {
    return producto.nombre.toLowerCase() === nombreProducto.toLowerCase();
  });

  if (productoEncontrado) {
    carrito.push(productoEncontrado); 
    alert('Ha agregado el producto al carrito:\n\nNombre: ' + productoEncontrado.nombre + ' - Precio: $' + productoEncontrado.precio);
    comprarProducto(); 
  } else {
    alert('El producto ingresado no existe');
    comprarProducto();
  }
}

function mostrarCarrito() {
  if (carrito.length > 0) {
    let mensaje = 'Productos en el carrito:\n\n';
    carrito.forEach(function(producto) {
      mensaje += 'Nombre: ' + producto.nombre + ' - Precio: $' + producto.precio + '\n';
    });
    alert(mensaje);
  } else {
    alert('El carrito está vacío');
  }

  mostrarMaxPrice();
}

mostrarMaxPrice();
