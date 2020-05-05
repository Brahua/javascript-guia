// Configurar en el tsconfig.json:
// "experimentalDecorators": true

function consola( constructor:Function ){
    console.log( constructor );
}

@consola
class Persona {

    constructor ( public nombre:string ) {
        
    }

}
