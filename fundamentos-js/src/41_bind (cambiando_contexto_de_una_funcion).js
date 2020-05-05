
const sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc'
}

const yesika = {
  nombre: 'Yesika',
  apellido: 'Cortés'
}

function saludar(saludo = 'Hola') {
  console.log(`${saludo}, mi nombre es ${this.nombre}`)
}
/* La funcion "bind" permite cambiar el contexto de la funcion */
// const saludarASacha = saludar.bind(sacha)
// const saludarAYesika = saludar.bind(yesika)
//
// setTimeout(saludar.bind(sacha, 'Hola che'), 1000)

/* La función "call" cambia el contexto y llama a la función */
// saludar.call(sacha, 'Hola che')

/* La misma funcionalidad del call pero los parametros se pasan a traves de un array */
saludar.apply(sacha, ['Hola che'])