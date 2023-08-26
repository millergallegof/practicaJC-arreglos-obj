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
// console.log(animales.length);

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

// for convencional
for (let index = 0; index < animales.length; index++) {
    // console.log(animales[index]);
}

// forEach -> recorrer los arreglos
animales.forEach((element) => {
    // console.log(element);
})

// map -> crea una copia del arreglo modificado
const animalesFuriosos = animales.map((animal) => {
    return animal + ' estoy furioso'
})

// console.log(animales);
// console.log(animalesFuriosos);

// acceder a un elemento - buscar un elemento
// indexOf -> me arroja el index del elemento que es igual
// metodo busca la primera coincidencia
animales.push('loro')
animales.push('elefante')
animales.push('paloma')
console.log(animales);
const indexElefante = animales.indexOf('elefante')
// console.log(animales.indexOf('elefante'));
// console.log(animales.lastIndexOf('elefante'));
// console.log('este es el animal que buscas ', animales[indexElefante]);

// revisar si un arreglo incluye un elemento dado
// includes -> boolen
// true -> si el arreglo incluye el elemento
// false -> si no lo incluye
const validateIncludes = animales.includes('loro')
// console.log(validateIncludes);

// some -> valida si algun elemento cumple la condicion
const apellido = 'gallego'

console.log(animales.some((animal) => {
    return animal.length > 9
}));

// console.log(animales.some((animal) => animal.length > 5));

// every -> todos los elementos cumplen la condicion
const everyAnimal = animales.every(animales => animales.length >= 3)
// console.log(everyAnimal);

// find -> busca el elemento en el arreglo
const findAnimal = animales.find((animal) => {
    return animal.length <= 3
})
// console.log(findAnimal);

// SORT -SORTED

// FILTER -> crea un nuevo arreglo validando una condicion
const animalesGrandes = animales.filter((animal) => {
    return animal.length > 5
})
// console.log(animalesGrandes);
const numerosFilter = [10, 50, 100, 20, 80, 15]
const numeroGrandes = numerosFilter.filter(numero => numero >= 50)
// console.log(numeroGrandes);

// map + filter
const numerosPorDosMayores = numerosFilter
    .map((numero) => numero * 2)
    .filter(numero => numero > 100);

// console.log(numerosPorDosMayores);

// reduce -> retorna un unico elemento
// parametros -> acumulador, elemento actual, index del elemento actual
// acum = 0 - numeroActual = 10
const sumaNumerosReduce = numerosFilter.reduce((acum, numeroActual, index) => {
    return acum + numeroActual
}, 0)

// console.log(sumaNumerosReduce);

// unir 2 arreglos
const vocales = ['a', 'e', 'i', 'o']
const consonantes = ['c', 'p', 'm', 'k']
// concat -> une 2 arreglos creando otro arreglo
const letras = consonantes.concat(vocales)
// console.log(letras);

// OBJETOS
const estudiante = {
    nombre: {
        primerNombre: 'Santiago',
        apellido: 'Castaño'
    },
    edad: 16,
    terminoLaPrimaria: true,
    mascotas: ['perro', 'gato'],
    hacerTarea: function () {
        console.log("santiago esta haciendo la tarea");
    }
}

// extraer el valor d eun atributo forma 1
console.log(estudiante.mascotas[0]);
console.log(estudiante['nombre'].primerNombre);

// agregar atributo a un objeto
estudiante.colorFavorito = 'Azul'
// console.log(estudiante);

delete estudiante.colorFavorito
// console.log(estudiante);
const nombre = 'miller'
const apellidoProfesor = 'gallego'


// const profesor = {
//     nombre: nombre,
//     apellidoProfesor: apellidoProfesor
// }

const profesor = {
    nombre,
    apellidoProfesor
}

console.log(profesor);
