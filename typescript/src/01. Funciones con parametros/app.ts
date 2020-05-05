function activar(nombre: string, universidad: string = "UTP", edad?: number) {
    let mensaje: string;

    if (edad) {
        mensaje = `${nombre} estudia en ${universidad} (${edad})`;

    } else {
        mensaje = `${nombre} estudia en ${universidad}`;
    }

    console.log(mensaje);
}

activar("Josue");
activar("Josue", "UPN");
activar("Josue", "UPN", 22);