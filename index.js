/* Ejercicios
1. some()
Verifica si algún elemento del arreglo cumple cierta condición.
 */
const numeros = [3, 7, 10, 18, 21];
// Ejercicios:
// 1. Verifica si hay algún número mayor que 15
// 2. Verifica si algún número es par
console.log(numeros.some(numero => numero > 15));
console.log(numeros.some(numero => numero % 2 === 0));


/* 2. every()
Comprueba si todos los elementos cumplen una condición.
 */
const edades = [18, 22, 30, 25, 19];
// Ejercicios:
// 1. Verifica si todos son mayores o iguales a 18
// 2. Verifica si todos son números pares
console.log(edades.every(edad => edad >= 18));
console.log(edades.every(edad => edad % 2 === 0));

/* 3. fill()
Rellena partes de un arreglo con un valor específico.
 */
let letras = ['a', 'b', 'c', 'd', 'e'];
// Ejercicios:
// 1. Rellena las tres primeras posiciones con 'x'
// 2. Rellena desde la posición 2 hasta la 4 con 'z'
console.log(letras.fill('x', 0, 3));
console.log(letras.fill('z', 1, 4));

/* 4. filter()
Crea un nuevo arreglo con los elementos que cumplen una condición.
 */
const productos = [
    { nombre: 'Laptop', precio: 1200 },
    { nombre: 'Mouse', precio: 25 },
    { nombre: 'Teclado', precio: 75 },
    { nombre: 'Monitor', precio: 300 }
];
// Ejercicios:
// 1. Filtra los productos que cuesten más de 100
// 2. Filtra los productos cuyo nombre tenga más de 5 letras
console.log(productos.filter(producto => producto.precio > 100));
console.log(productos.filter(producto => producto.nombre.length > 5));

/* 5. find()
Devuelve el primer elemento que cumpla la condición.
 */
const alumnos = [
    { nombre: 'Ana', edad: 17 },
    { nombre: 'Luis', edad: 20 },
    { nombre: 'Carmen', edad: 19 }
];
// Ejercicios:
// 1. Encuentra al primer alumno mayor de 18 años
// 2. Encuentra al alumno cuyo nombre sea 'Luis'
console.log(alumnos.find(alumno => alumno.edad > 18));
console.log(alumnos.find(alumno => alumno.nombre === 'Luis'));

/* 6. findIndex()
Devuelve el índice del primer elemento que cumpla la condición.
 */
const frutas = ['manzana', 'plátano', 'pera', 'fresa', 'uva'];
// Ejercicios:
// 1. Encuentra el índice de 'pera'
// 2. Encuentra el índice de la primera fruta con más de 5 letras
console.log(frutas.findIndex(fruta => fruta === 'pera'));
console.log(frutas.findIndex(fruta => fruta.length > 5));

/* 7. Set
Estructura de datos que no permite valores duplicados.
 */
const numerosDuplicados = [1, 2, 2, 3, 4, 4, 5];
// Ejercicios:
// 1. Crea un Set para eliminar los duplicados
// 2. Convierte el Set nuevamente a un arreglo sin duplicados
// 3. Agrega un nuevo número al Set y verifica si ya existe
let setNumeros = new Set(numerosDuplicados);
let arregloSinDuplicados = [...setNumeros];
console.log(arregloSinDuplicados);
setNumeros.add(6);
console.log(setNumeros.has(6));
console.log(setNumeros);

/* 8. Practica
Crea un arreglo de objetos llamado personas con propiedades nombre, edad, y ciudad.
Luego realiza los siguientes pasos:
Filtra las personas mayores de 18 años.
Usa some() para saber si hay alguien de "Madrid".
Usa every() para verificar si todos son mayores de edad.
Usa find() para obtener la primera persona de "México".
Usa findIndex() para obtener la posición de alguien llamado "Ana". */
const personas = [
    {nombre: "Mike", edad: 25, ciudad: "CDMX"},
    {nombre: "Ana", edad: 17, ciudad: "Madrid"},
    {nombre: "Geovani", edad: 22, ciudad: "México"},
    {nombre: "Luisa", edad: 30, ciudad: "Barcelona"},
    {nombre: "Carlos", edad: 16, ciudad: "Madrid"}
];
console.log(personas.filter(persona => persona.edad > 18));
console.log(personas.some(persona => persona.ciudad === "Madrid"));
console.log(personas.every(persona => persona.edad >= 18));
console.log(personas.find(persona => persona.ciudad === "México"));
console.log(personas.findIndex(persona => persona.nombre === "Ana"));
