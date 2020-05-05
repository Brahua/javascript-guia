//Objetos
let juego = {
    nombre: "Resident",
    tipo: "Terror",
    dificultad: "Dificil"
};

//Se coloca el nombre de los parametros del objeto sin importar el orden
let { tipo, nombre, dificultad } = juego;

console.log(nombre, tipo, dificultad);



//Arreglos
let juegos = [ "Resident", "FIFA", "Crash"];

//Se coloca un alias para cada elemento del arreglo, en orden

let [ re, fifa, c ] = juegos;

let [ , , crash ] = juegos;

console.log(re, fifa, c);

console.log(crash);