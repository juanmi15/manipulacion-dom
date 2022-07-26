// const nombre = "Carlos";
// const apellido = " Sanchez";
// const usuarioPlatzi = "Csanchez10";
// const edad = 23;
// const email = "carlos10@gmail.com";
// const mayorDeEdad = true;
// const ahorro = 400;
// const deuda = 284;

// const nombreCompleto = nombre + apellido;
// console.log(nombreCompleto);
// const dineroReal = ahorro - deuda;
// console.log(dineroReal);


// function nombreCompleto(nombre,apellido,usuario){
//     console.log(`Mi nombre completo es ${nombre} ${apellido} Pero prefiero que me digas ${usuario}`);
// }

// nombreCompleto("Juan Miguel","Atencia","ModoDiavlo15");



const tipoDeSubscripcion = "Basic"

if(tipoDeSubscripcion === "Free"){
    console.log("Solo puedes tomar los cursos basicos");
} else if(tipoDeSubscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if(tipoDeSubscripcion === "Expert"){
    console.log("Puedes tomar todos los cursos de Platzi durante un año");  
}else if(tipoDeSubscripcion === "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"); 
} else {
    console.log("No aplica");
}

//--    ----------------------------------------------------------------
let typeSuscripción = [
    "Free",
    "Basic", 
    "Expert", 
    "ExpertPlus"
];

let infoSuscripción = [
    "solo puedes tomar los cursos gratis", 
    "puedes tomar casi todos los cursos de Platzi durante un mes", 
    "puedes tomar casi todos los cursos de Platzi durante un año", 
    "tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
];

let userSuscription = "Expert";
   
for (let i=0; i < typeSuscripción.length; i++) {
      if (userSuscription == typeSuscripción[i]) {
          console.log(`Si estas suscrito al plan ${typeSuscripción[i]} en el cual ${infoSuscripción[i]}`)
      }
}

//----------------------------------------------------------------
i = 0;
while (i < 5) {
    console.log(`El valor de i: ${i}`)
    i++;
    
}

z = 10;
while (z >= 2) {
    console.log(`El valor de z: ${z}`)
    z--;

}

//--    ------------------------------------------------------------

// const pregunta = prompt('¿Cuánto es 2 + 2?');
// const respuesta = parseInt(pregunta);

// if(respuesta != 4){
//     alert('Incorrecto :(');
// } else {
//     alert("¡Felicitaciones es Correcto!");
// }
//------------------------------------------------------------------------------------------------

const prueba1 = ["Primero", "Segundo", "Tercero"];
const prueba2 = ["Carlos", "David", "Jesús"];
const prueba3 = ["Mango", "Banana", "Fresa"];


function onlyFirstElement(array){
    console.log(array[0]);
}
onlyFirstElement(prueba1);
onlyFirstElement(prueba3);

function allElements(array){
    for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
}

allElements(prueba2);

const objeto1 = {
    nombre: "alimento de perro",
    expiracion: "22 de septiembre",
    costo: "$13.45"
}

function leerObjeto(objeto){
    // for(let key in objeto){
    //     console.log(objeto[key]);
    // }
    console.log(Object.keys(objeto));
    console.log(Object.values(objeto));
    console.log(Object.entries(objeto));

}

leerObjeto(objeto1)