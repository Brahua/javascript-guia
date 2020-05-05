var nombre = 'Sacha', apellido = 'Lifszyc'
var edad = 28

edad = '28 años'

console.log('Hola ' + nombre + ' ' + apellido)
console.log('Tengo ' + edad)

var peso = 75


/* var - let - const */
var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  edad: 28
}

function esMayorDeEdad(persona) {
  let mensaje
  const MAYORIA_DE_EDAD = 18
  if (persona.edad >= MAYORIA_DE_EDAD) {
    mensaje = 'Es mayor de edad'
  } else {
    mensaje = 'Es menor de edad'
  }
  console.log(mensaje)
}

// esMayorDeEdad(sacha)

for (let i = 0; i < 10; i++) {
  console.log(i)
}

console.log(`Terminó el for, el valor de i es ${i}`)