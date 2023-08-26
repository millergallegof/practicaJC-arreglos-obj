// ARREGLOS
const animales = ['perro', 'gato', 'tortuga', 'elefante'];
const numeros = [1, 2, 3, 4, 50, 100]
// console.log("este es mi arreglo de animales", animales);
// console.log(numeros);

// acceder a un elemento de un arreglo
console.log(animales[1]);

// modificar el dato de un arreglo
animales[2] = 'conejo'
// console.log(animales);
console.log(animales.length);

// agregar otro animal
// push -> agrega un elemento al final del arreglo
animales.push('raton')
console.log(animales);

// eliminar el ultimo elemeento de el arreglo
// pop
// console.log('original arreglo', animales);
animales.pop();
// console.log('eliminado raton', animales);

// aliminar el primer elemento
animales.shift()
// console.log(animales);

// agregar elemento al comienzo del arreglo
animales.unshift('oso')
// console.log(animales);

// como recorrer un arreglo
// for convencional
for (let index = 0; index < animales.length; index++) {
    console.log(animales[index]);
}

// primera forma
function soyUnafuncion(params) {
    const nombre = 'coach'
    if (params === 3) {
        console.log("hola mundo");
    }
    params = params + 1
    console.log(params);
}

// segunda forma crear funciones
const arrowFunction = (params) => {
    // lo que quieran
}


// forEach -> recorrer los arreglos
animales.forEach()