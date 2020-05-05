"use strict";
function activar(nombre, universidad = "UTP", edad) {
    let mensaje;
    if (edad) {
        mensaje = `${nombre} estudia en ${universidad} (${edad})`;
    }
    else {
        mensaje = `${nombre} estudia en ${universidad}`;
    }
    console.log(mensaje);
}
activar("Josue");
activar("Josue", "UPN");
activar("Josue", "UPN", 22);
