
function crearSaludo(finalDeFrase) {
  return function (nombre) {
    console.log(`Hola ${nombre} ${finalDeFrase}`)
  }
}

const saludoArgentino = crearSaludo('che')
const saludoMexicano = crearSaludo('güey')
const saludoColombiano = crearSaludo('amigo')

saludoArgentino('Sacha') // Hola Sacha che
saludoMexicano('Sacha') // Hola Sacha güey
saludoColombiano('Sacha') // Hola Sacha amigo
