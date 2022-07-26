

// // La mejor forma de acceder a los que no tienen clases/id o etc... es con QuerySelector
// const h1 = document.querySelector('h1'); // Seleccionar etiquetas
// const p = document.querySelector('p'); // Seleccionar etiquetas
// const parrafito = document. querySelector('.parrafito'); // Para selecionar clases
// const pid = document.querySelector('#pid'); // Para selecionar id
// const input = document.querySelector('input'); // Para selecionar input

// const { resourceLimits } = require("worker_threads");

// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input
// }); // Esto nos permite mostrar la informacion que tiene guardada cada elemento tomada del HTML.

// console.log(h1.textContent);


// // Otra forma de seleccionar elemento es

// // const parrafoId = document.getElementById('pid');
// // const parrafos = document.getElementsByClassName("parrafito")

// // console.log(
// //     parrafoId, // Aqui nos selecciona al elemento con el id 
// //     parrafos //Aqui nos selecciona a todos los elementos con la clase parrafito
// // );

// // ----------------------------------------------------------------

// h1.innerHTML = "Cambio de titulo <br> feo"; // De esta manera cambiamos/manipulamos el html desde Js
// // Le agregamos nuevo texto y hasta un espacio de <br>
// h1.innerText = "Cambio de titulo con innerText ";
// console.log(h1.getAttribute("class")); // Nos permite obtener un atributo del html en caso de que exista
// h1.setAttribute('class','superTitulo'); // De esta manera podemos cambiar el valor de una clase
// h1.classList.add('titulo2') // De esta manera agregamos una segunda clase a este elemento.
// h1.classList.remove('superTitulo') // Eliminamos una de las clases

// input.value = "456"; // Asi modificamos el value de un input

// //------------------------------------------------------------------------------
// // PARA CREAR UN ELEMENTO EN EL HTML DESDE JS:

// // console.log(document.createElement("img")); 

// // introducir un elemento al html y reemplazar el actual

// const img = document.createElement("img");
// // Aqui agregamos un atributo source o src y le damos su enlace
// img.setAttribute("src","https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg");
// console.log(img); // Mostramos la informacion de la imagen en consola
// pid.innerHTML = "";
// pid.append(img) // Agregamos la imagen a uno de nuestros elementos html y lo hacemos x su id


const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const btn2 = document.querySelector("#btnCalcular2");
const pResult = document.querySelector("#result");
const mouseId = document.querySelector("#mouseUp");

// para escuchar el html y ejecutar funciones utilizamos onchage o onclick

function onClickBtnCalcular(){ // Esto es lo que se ejecutará cada que presionemos el botón
    // console.log("Escuchando el evento de click");   
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = `El resultado de esta suma equivale a ${sumaInputs}`;

}


// Otra manera de usar el DOM sin alterar el html:
btn2.addEventListener("click", btnOnclick); // R E C O M E N D A D O

function btnOnclick() {
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = `El resultado n#2 de esta suma equivale a ${sumaInputs}`;
}


mouseId.addEventListener("mouseover", mouseArriba);

function mouseArriba(e){
    e.preventDefault();
    alert("No llenaste tu papeleo anoche")
}