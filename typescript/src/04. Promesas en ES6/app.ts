
let promesa = new Promise( function( resolve, reject ){
    setTimeout(() => {
        console.log("Promesa ejecutada");
        
        //Termina bien
        resolve();
        //Termina mal
        //reject();

    }, 1500);
})

promesa.then( 
    //resolve
    function () {
        console.log("Se ejecutó correctamente.");
    },
    //reject
    function () {
        console.error("Hubo errores");
    }
);



