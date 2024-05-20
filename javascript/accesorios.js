
/* SECCION DE CHECKBOXES */

const checkboxes = document.querySelectorAll('.categorias_checkbox input[type="checkbox"]');
const imagenes = document.querySelectorAll('.contenedor_medio_imagenes .producto, .contenedor_medio_imagenes .producto_2, .contenedor_medio_imagenes .producto_3, .contenedor_medio_imagenes .producto_4, .contenedor_medio_imagenes .producto_5, .contenedor_medio_imagenes .producto_6, .contenedor_medio_imagenes .producto_7, .contenedor_medio_imagenes .producto_8, .contenedor_medio_imagenes .producto_9');

for (const checkbox of checkboxes) {
  checkbox.addEventListener('change', function () {
    const imagenesAMostrar = [];

    // Iterar sobre todos los checkboxes
    checkboxes.forEach(checkbox => {
      // Verificar si el checkbox está marcado
      if (checkbox.checked) {
        // Obtener las imágenes correspondientes al checkbox seleccionado
        const imagenURLs = checkbox.dataset.image.split(' ');
        imagenesAMostrar.push(...imagenURLs);
      }
    });

    // Mostrar solo las imágenes seleccionadas
    imagenes.forEach(imagen => {
      const urlImagen = imagen.querySelector('img').getAttribute('src');
      if (imagenesAMostrar.includes(urlImagen)) {
        imagen.style.display = 'block';
      } else {
        imagen.style.display = 'none';
      }
    });

    // Mostrar todas las imágenes si no se selecciona ningún checkbox
    if (imagenesAMostrar.length === 0) {
      imagenes.forEach(imagen => {
        imagen.style.display = 'block';
      });
    }
  });
}



//SECCION DE COLORES

// Seleccionar todos los elementos de color
const colores = document.querySelectorAll('.color');

// Seleccionar todas las imágenes y sus contenedores
const contenedoresImagenes = document.querySelectorAll('.producto, .producto_2, .producto_3, .producto_4, .producto_5, .producto_6, .producto_7, .producto_8, .producto_9');

// Función para filtrar imágenes por colores seleccionados
function filtrarImagenesPorColores() {
  const coloresSeleccionados = Array.from(document.querySelectorAll('.color.selected')).map(color => color.dataset.color);

  contenedoresImagenes.forEach(contenedor => {
    const imagen = contenedor.querySelector('img');
    const colorImagen = imagen.dataset.color;
    // Mostrar contenedor si no hay colores seleccionados o si la imagen coincide con alguno de los colores seleccionados
    if (coloresSeleccionados.length === 0 || coloresSeleccionados.includes(colorImagen)) {
      contenedor.style.display = 'block';
    } else {
      contenedor.style.display = 'none';
    }
  });
}

// Agregar evento de clic a cada elemento de color
colores.forEach(color => {
  color.addEventListener('click', () => {
    color.classList.toggle('selected');
    filtrarImagenesPorColores();
  });
});

// Mostrar todas las imágenes al cargar la página
filtrarImagenesPorColores();






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








//seccion de lupa

const searchIcon = document.querySelector('.fa-solid.fa-magnifying-glass');
searchIcon.addEventListener('click', toggleSearchBar);

function toggleSearchBar() {
    const searchName = document.getElementById('searchName');

    if (searchName.style.display === 'none') {
        searchName.style.display = 'block';
    } else {
        searchName.style.display = 'none';
        searchName.value = '';
        resetProductVisibility();
    }
}

function filterProducts() {
    const nameInput = document.getElementById('searchName').value.toLowerCase();

    const products = document.querySelectorAll('.producto, .producto_2, .producto_3, .producto_4, .producto_5, .producto_6, .producto_7, .producto_8, .producto_9');

    let foundMatch = false;

    products.forEach(product => {
        const nombre = product.getAttribute('data-nombre');

        if (nombre && nombre.toLowerCase().includes(nameInput)) {
            product.style.display = 'block';
            foundMatch = true;
        } else {
            product.style.display = 'none';
        }
    });

    if (!foundMatch) {
        resetProductVisibility();
    }
}

function resetProductVisibility() {
    const products = document.querySelectorAll('.producto, .producto_2, .producto_3, .producto_4, .producto_5, .producto_6, .producto_7, .producto_8, .producto_9');
    products.forEach(product => {
        product.style.display = 'block';
    });
}

document.getElementById('searchName').addEventListener('input', filterProducts);





