
const sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  edad: 28
}

// const cumpleanos = persona => persona.edad++

const cumpleanosInmutable = persona => ({
  ...persona,
  edad: persona.edad + 1
})
