// ===== Tarea 1: cambiar el estilo del parrafo =====
const parrafo = document.getElementById('parrafo');
const botonEstilo = document.getElementById('botonEstilo');

botonEstilo.addEventListener('click', function () {
    parrafo.style.fontFamily = 'Georgia, serif';
    parrafo.style.fontSize = '24px';
    parrafo.style.color = 'crimson';
});


// ===== Tarea 2: valores del formulario =====
const form1 = document.getElementById('form1');

form1.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = form1.elements.fname.value;
    const apellido = form1.elements.lname.value;

    console.log('Nombre:', nombre);
    console.log('Apellido:', apellido);
});


// ===== Tarea 3: informacion de los enlaces =====
const botonEnlaces = document.getElementById('botonEnlaces');

botonEnlaces.addEventListener('click', function () {
    const enlaces = document.querySelectorAll('a');
    const total = enlaces.length;
    const primero = enlaces[0];
    const ultimo = enlaces[total - 1];

    alert(
        'Total de enlaces: ' + total + '\n' +
        'Primer enlace: ' + primero.href + '\n' +
        'Ultimo enlace: ' + ultimo.href
    );
});


// ===== Tarea extra =====

// 1. seccion contenedor
const contenedor = document.getElementById('contenedor');
console.log('1.', contenedor);

// 2. elementos con clase segundo
const segundos = document.querySelectorAll('.segundo');
console.log('2.', segundos);

// 3. li con clase tercero dentro del ol
const terceroOl = document.querySelector('ol .tercero');
console.log('3.', terceroOl);

// guardo el ul antes del paso 4, porque textContent borra todo lo que hay dentro
const ul = contenedor.querySelector('ul');

// 4. texto de la seccion
contenedor.textContent = '¡Hola!';
contenedor.append(ul); // vuelvo a poner el ul para poder usarlo en el paso 9
console.log('4.', contenedor);

// 5. añadir clase principal al footer
const footer = document.querySelector('.footer');
footer.classList.add('principal');
console.log('5.', footer.classList);

// 6. quitar la clase principal
footer.classList.remove('principal');
console.log('6.', footer.classList);

// 7. crear un li
const nuevoLi = document.createElement('li');

// 8. darle texto
nuevoLi.textContent = 'cuatro';
console.log('7 y 8.', nuevoLi);

// 9. añadirlo al ul
ul.append(nuevoLi);
console.log('9.', ul);
