
//SECCION DE OCULTAR Y APARECER EL CONTENEDOR DE CARRITO 

// Obtener referencia al contenedor del carrito
var carritoContainer = document.getElementById('carrito');

// Obtener referencia al logo del carrito
var logoCarrito = document.getElementById('logo-carrito');

// Ocultar el contenedor del carrito al principio
carritoContainer.style.display = 'none';

// Añadir evento de clic al logo del carrito
logoCarrito.addEventListener('click', function (event) {
    // Evitar el comportamiento predeterminado del enlace
    event.preventDefault();

    // Alternar la visibilidad del contenedor del carrito
    if (carritoContainer.style.display === 'none') {
        carritoContainer.style.display = 'block';
    } else {
        carritoContainer.style.display = 'none';
    }
});





//SPAN DEL CARRITO

function actualizarCuentaCarrito() {
    const cuentaCarritoElement = document.getElementById('cuenta-carrito');
    const totalItems = carritoItems.reduce((total, item) => total + item.cantidad, 0);
    cuentaCarritoElement.textContent = totalItems;
}

// CARRITO

let carritoItems = [];
let carritoTotal = 0;

// Obtener los datos del carrito del localStorage al cargar la página
window.addEventListener('load', () => {
    const carritoGuardado = JSON.parse(localStorage.getItem('carrito'));
    if (carritoGuardado) {
        carritoItems = carritoGuardado.items;
        carritoTotal = carritoGuardado.total;
        actualizarCarrito();
        actualizarCuentaCarrito();
    }
});

// Obtener todos los elementos de producto
const productosElements = document.querySelectorAll('.producto, .producto_2, .producto_3, .producto_4, .producto_5, .producto_6, .producto_7, .producto_8, .producto_9');

productosElements.forEach(producto => {
    const botonAgregarCarrito = producto.querySelector('.descripcion button, .descripcion_2 button, .descripcion_3 button, .descripcion_4 button, .descripcion_5 button, .descripcion_6 button, .descripcion_7 button, .descripcion_8 button, .descripcion_9 button');

    botonAgregarCarrito.addEventListener('click', () => {
        const nombre = producto.getAttribute('data-nombre');
        let precioTexto = producto.querySelector('p:nth-of-type(1)').textContent.trim();
        let precio = parseFloat(precioTexto.replace('$', ''));
        precio = precio.toFixed(2);
        const imagen = producto.querySelector('img').getAttribute('src');

        const productoExistente = carritoItems.find(item => item.nombre === nombre);
        if (productoExistente) {
            productoExistente.cantidad++;
            productoExistente.total = (parseFloat(productoExistente.precio) * productoExistente.cantidad).toFixed(2);
        } else {
            carritoItems.push({ nombre, precio, imagen, cantidad: 1, total: precio });
        }
        carritoTotal += parseFloat(precio);

        actualizarCarrito();
        actualizarCuentaCarrito();
    });
});

// Guardar los datos del carrito en el localStorage cuando se actualice
function guardarCarritoEnLocalStorage() {
    const carritoGuardado = {
        items: carritoItems,
        total: carritoTotal
    };
    localStorage.setItem('carrito', JSON.stringify(carritoGuardado));
}

function actualizarCarrito() {
    const carritoItemsElement = document.getElementById('carrito-items');
    carritoItemsElement.innerHTML = '';

    carritoItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('carrito-item');
        itemElement.innerHTML = `
        <div class="carrito-item-contenido">  
        <img src="${item.imagen}" alt="${item.nombre}">
        <h3>${item.nombre}</h3>
        <p>precio: $${item.precio} <br> cantidad: ${item.cantidad}</p>
        <p>Total: $${item.total}</p>
        <button class="incrementar-cantidad" data-nombre="${item.nombre}">+</button>
        <button class="disminuir-cantidad" data-nombre="${item.nombre}">-</button>
      </div>
    `;
        carritoItemsElement.appendChild(itemElement);
    });

    const carritoTotalElement = document.getElementById('carrito-total');
    carritoTotalElement.textContent = `Total: $${carritoTotal.toFixed(2)}`;

    const botonReiniciarCarrito = document.createElement('button');
    botonReiniciarCarrito.textContent = 'Reiniciar Carrito';
    botonReiniciarCarrito.classList.add('boton-carrito');
    botonReiniciarCarrito.addEventListener('click', reiniciarCarrito);
    carritoTotalElement.appendChild(botonReiniciarCarrito);

    const botonPagar = document.createElement('button');
    botonPagar.textContent = 'Pagar';
    botonPagar.classList.add('boton-pagar');
    botonPagar.addEventListener('click', pagar);
    carritoTotalElement.appendChild(botonPagar);

    const botonesIncrementar = document.querySelectorAll('.incrementar-cantidad');
    botonesIncrementar.forEach(boton => {
        boton.addEventListener('click', () => {
            const nombre = boton.getAttribute('data-nombre');
            const producto = carritoItems.find(item => item.nombre === nombre);
            if (producto) {
                producto.cantidad++;
                producto.total = (parseFloat(producto.precio) * producto.cantidad).toFixed(2);
                carritoTotal += parseFloat(producto.precio);
                actualizarCarrito();
                actualizarCuentaCarrito();
            }
        });
    });

    const botonesDisminuir = document.querySelectorAll('.disminuir-cantidad');
    botonesDisminuir.forEach(boton => {
        boton.addEventListener('click', () => {
            const nombre = boton.getAttribute('data-nombre');
            const producto = carritoItems.find(item => item.nombre === nombre);
            if (producto && producto.cantidad > 1) {
                producto.cantidad--;
                producto.total = (parseFloat(producto.precio) * producto.cantidad).toFixed(2);
                carritoTotal -= parseFloat(producto.precio);
                actualizarCarrito();
                actualizarCuentaCarrito();
            }
        });
    });

    guardarCarritoEnLocalStorage(); // Guardar los datos del carrito en el localStorage
}

function reiniciarCarrito() {
    carritoItems = [];
    carritoTotal = 0;
    actualizarCarrito();
    actualizarCuentaCarrito();
    guardarCarritoEnLocalStorage(); // Guardar el carrito vacío en el localStorage
}

function pagar() {
    alert(`Gracias por tu compra. Total a pagar: $${carritoTotal.toFixed(2)}`);
    reiniciarCarrito();
}

// Función para actualizar el contador del carrito
function actualizarCuentaCarrito() {
    const cuentaCarritoElement = document.getElementById('cuenta-carrito');
    const totalItems = carritoItems.reduce((total, item) => total + item.cantidad, 0);
    cuentaCarritoElement.textContent = totalItems;
}






