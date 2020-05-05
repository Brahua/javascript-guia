"use strict";
function iniciarJuego(juego) {
    console.log("Iniciando: " + juego.nombre);
}
function detenerJuego(juego) {
    console.log("Finalizando: " + juego.nombre);
}
let videojuego = {
    nombre: "Resident",
    dificultad: "Normal"
};
iniciarJuego(videojuego);
detenerJuego(videojuego);
