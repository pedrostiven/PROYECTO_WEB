
/* SECCION DE CHECKBOXES */

const checkboxes = document.querySelectorAll('.categorias_checkbox input[type="checkbox"]');
const imagenes = document.querySelectorAll('.contenedor_medio_imagenes .producto, .contenedor_medio_imagenes .producto_2, .contenedor_medio_imagenes .producto_3, .contenedor_medio_imagenes .producto_4, .contenedor_medio_imagenes .producto_5, .contenedor_medio_imagenes .producto_6, .contenedor_medio_imagenes .producto_7, .contenedor_medio_imagenes .producto_8, .contenedor_medio_imagenes .producto_9');

for (const checkbox of checkboxes) {
  checkbox.addEventListener('change', function () {
    const isChecked = this.checked;
    const imagenURLs = this.dataset.image.split(' ');

    // Ocultar todos los elementos primero
    imagenes.forEach(elemento => {
      elemento.style.display = 'none';
    });

    // Mostrar los elementos seleccionados
    if (isChecked) {
      imagenURLs.forEach(url => {
        const imagenSeleccionada = document.querySelector(`img[src="${url.trim()}"]`);
        if (imagenSeleccionada) {
          const productoSeleccionado = imagenSeleccionada.closest('.producto, .producto_2, .producto_3, .producto_4, .producto_5, .producto_6, .producto_7, .producto_8, .producto_9');
          productoSeleccionado.style.display = 'block';
        }
      });
    } else {
      // Mostrar todos los elementos si se deselecciona un checkbox
      imagenes.forEach(elemento => {
        elemento.style.display = 'block';
      });
    }
  });
}





//SECCION DE COLORES

// Seleccionar todos los elementos de color
const colores = document.querySelectorAll('.color');

// Seleccionar todas las imágenes y sus contenedores
const contenedoresImagenes = document.querySelectorAll('.producto, .producto_2, .producto_3, .producto_4, .producto_5, .producto_6, .producto_7, .producto_8, .producto_9');

// Variable para almacenar el último color seleccionado
let ultimoColorSeleccionado = '';

// Función para ocultar o mostrar imágenes y sus contenedores según el color seleccionado
function filtrarImagenesPorColor(colorSeleccionado) {
  // Si se selecciona el mismo color que antes, mostrar todo
  if (colorSeleccionado === ultimoColorSeleccionado) {
    contenedoresImagenes.forEach(contenedor => {
      contenedor.style.display = 'block';
    });
    ultimoColorSeleccionado = ''; // Restablecer el último color seleccionado
  } else {
    contenedoresImagenes.forEach(contenedor => {
      const imagen = contenedor.querySelector('img');
      const colorImagen = imagen.dataset.color;
      if (colorSeleccionado === '') {
        // Mostrar todo si no hay color seleccionado
        contenedor.style.display = 'block';
      } else if (colorImagen === colorSeleccionado) {
        // Mostrar contenedor si la imagen coincide con el color seleccionado
        contenedor.style.display = 'block';
      } else {
        // Ocultar contenedor si la imagen no coincide con el color seleccionado
        contenedor.style.display = 'none';
      }
    });
    ultimoColorSeleccionado = colorSeleccionado; // Actualizar el último color seleccionado
  }
}

// Agregar evento de clic a cada elemento de color
colores.forEach(color => {
  color.addEventListener('click', () => {
    const colorSeleccionado = color.dataset.color;
    filtrarImagenesPorColor(colorSeleccionado);
  });
});

// Mostrar todo al cargar la página
filtrarImagenesPorColor('');






//SECCION DE TALLAS 

// Seleccionar el elemento select de tallas
const selectTallas = document.getElementById('talla');

// Seleccionar todos los contenedores de productos
const contenedoresProductos = document.querySelectorAll('.producto, .producto_2, .producto_3, .producto_4, .producto_5, .producto_6, .producto_7, .producto_8, .producto_9');

// Función para mostrar u ocultar productos según la talla seleccionada
function filtrarPorTalla(talla) {
  contenedoresProductos.forEach(contenedor => {
    const tallasDisponibles = contenedor.dataset.tallas.split(',');
    if (talla === '') {
      // Mostrar todos los productos si no hay talla seleccionada
      contenedor.style.display = 'block';
    } else if (tallasDisponibles.includes(talla)) {
      // Mostrar el producto si está disponible en la talla seleccionada
      contenedor.style.display = 'block';
    } else {
      // Ocultar el producto si no está disponible en la talla seleccionada
      contenedor.style.display = 'none';
    }
  });
}

// Agregar evento de cambio al select de tallas
selectTallas.addEventListener('change', () => {
  const tallaSeleccionada = selectTallas.value;
  filtrarPorTalla(tallaSeleccionada);
});

// Mostrar todos los productos al cargar la página
filtrarPorTalla('');





//SECCION DE ORDENAMINETO

// Seleccionar el elemento select de ordenar
const selectOrdenar = document.getElementById('ordenar');

// Seleccionar todos los contenedores de productos
const contenedoresDeProductos = document.querySelectorAll('.producto, .producto_2, .producto_3, .producto_4, .producto_5, .producto_6, .producto_7, .producto_8, .producto_9');

// Función para ordenar los productos según la opción seleccionada
function ordenarProductos(opcion) {
  // Obtener todos los precios de los productos
  const precios = Array.from(contenedoresDeProductos).map(contenedor => {
    const precioElemento = contenedor.querySelector('p');
    const precioTexto = precioElemento.textContent.replace('$', '').replace('.', '');
    return parseInt(precioTexto);
  });

  // Ordenar los precios según la opción seleccionada
  let preciosOrdenados;
  switch (opcion) {
    case 'precio_ascendente':
      preciosOrdenados = precios.slice().sort((a, b) => a - b);
      break;
    case 'precio_descendente':
      preciosOrdenados = precios.slice().sort((a, b) => b - a);
      break;
    default:
      preciosOrdenados = precios;
  }

  // Reordenar los contenedores de productos según los precios ordenados
  preciosOrdenados.forEach((precio, index) => {
    const contenedorProducto = Array.from(contenedoresDeProductos).find(contenedor => {
      const precioElemento = contenedor.querySelector('p');
      const precioTexto = precioElemento.textContent.replace('$', '').replace('.', '');
      return parseInt(precioTexto) === precio;
    });
    contenedorProducto.style.order = index;
  });
}

// Agregar evento de cambio al select de ordenar
selectOrdenar.addEventListener('change', () => {
  const opcionSeleccionada = selectOrdenar.value;
  ordenarProductos(opcionSeleccionada);
});

// Mostrar todos los productos al cargar la página
ordenarProductos('relevancia');