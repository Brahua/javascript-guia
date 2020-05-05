
//Interface
interface videojuego {
    nombre:string,
    dificultad:string
}



function iniciarJuego(juego:videojuego ) {
    console.log("Iniciando: " + juego.nombre)
}

function detenerJuego(juego:videojuego) {
    console.log("Finalizando: " + juego.nombre)
}



let videojuego:videojuego = {
    nombre: "Resident",
    dificultad: "Normal"
}

iniciarJuego(videojuego);
detenerJuego(videojuego);