
let persona = {
    nombre: "Josue",

    activar(){

        setTimeout(() => {
            console.log(this.nombre);
        }, 1500)

        // En una sola línea
        setTimeout(() => console.log(this.nombre), 1500);
    }
};

persona.activar();