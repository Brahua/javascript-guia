//01. Funciones como parametros
class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
  }

  saludar(fn) {
    var { nombre, apellido } = this;

    console.log(`Hola, me llamo ${nombre} ${apellido}`);
    if (fn) {
      fn(nombre, apellido);
    }
  }

  soyAlto() {
    return this.altura > 1.8;
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura);
  }

  saludar(fn) {
    // var nombre = this.nombre
    // var apellido = this.apellido
    var { nombre, apellido } = this;

    console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador/a`);
    if (fn) {
      fn(nombre, apellido, true);
    }
  }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen día ${nombre} ${apellido}`);
  if (esDev) {
    console.log(`Ah mirá, no sabía que eras desarrollador/a`);
  }
}

var sacha = new Persona("Sacha", "Lifszyc", 1.72);
var erika = new Persona("Erika", "Luna", 1.65);
var arturo = new Desarrollador("Arturo", "Martinez", 1.89);

sacha.saludar();
erika.saludar(responderSaludo);
arturo.saludar(responderSaludo);


//02. Callbacks
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

const onPeopleResponse = function (persona) {
  console.log(`Hola, yo soy ${persona.name}`)
}

/*function obtenerPersonaje(id) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  $.get(url, opts, onPeopleResponse)
}

obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)*/

function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

  $
    .get(url, opts, callback)
    .fail(() => {
      console.log(`Sucedió un error. No se pudo obtener el personaje ${id}`)
    })
}

obtenerPersonaje(1, function (personaje) {
  console.log(`Hola, yo soy ${personaje.name}`)

  obtenerPersonaje(2, function (personaje) {
    console.log(`Hola, yo soy ${personaje.name}`)

    obtenerPersonaje(3, function (personaje) {
      console.log(`Hola, yo soy ${personaje.name}`)

      obtenerPersonaje(4, function (personaje) {
        console.log(`Hola, yo soy ${personaje.name}`)

        obtenerPersonaje(5, function (personaje) {
          console.log(`Hola, yo soy ${personaje.name}`)

          obtenerPersonaje(6, function (personaje) {
            console.log(`Hola, yo soy ${personaje.name}`)

            obtenerPersonaje(7, function (personaje) {
              console.log(`Hola, yo soy ${personaje.name}`)
            })
          })
        })
      })
    })
  })
})


//03. Promesas
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $
      .get(url, opts, function (data) {
        resolve(data)
      })
      .fail(() => reject(id))
  })
}

function onError(id) {
  console.log(`Sucedió un error al obtener el personaje ${id}`)
}

var ids = [1, 2, 3, 4, 5, 6, 7]
// var promesas = ids.map(function (id) {
//   return obtenerPersonaje(id)
// })
var promesas = ids.map(id => obtenerPersonaje(id))
Promise
  .all(promesas)
  .then(personajes => console.log(personajes))
  .catch(onError)

// obtenerPersonaje(1)
//   .then(personaje1 => {
//     console.log(`El personaje 1 es ${personaje1.name}`)
//     return obtenerPersonaje(2)
//   })
//   .then(personaje2 => {
//     console.log(`El personaje 2 es ${personaje2.name}`)
//     return obtenerPersonaje(3)
//   })
//   .then(personaje3 => {
//     console.log(`El personaje 3 es ${personaje3.name}`)
//     return obtenerPersonaje(4)
//   })
//   .then(personaje4 => {
//     console.log(`El personaje 4 es ${personaje4.name}`)
//     return obtenerPersonaje(5)
//   })
//   .then(personaje5 => {
//     console.log(`El personaje 5 es ${personaje5.name}`)
//     return obtenerPersonaje(6)
//   })
//   .then(personaje6 => {
//     console.log(`El personaje 6 es ${personaje6.name}`)
//     return obtenerPersonaje(7)
//   })
//   .then(personaje7 => {
//     console.log(`El personaje 7 es ${personaje7.name}`)
//   })
//   .catch(onError)


//04. Async y Await
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $
      .get(url, opts, function (data) {
        resolve(data)
      })
      .fail(() => reject(id))
  })
}

function onError(id) {
  console.log(`Sucedió un error al obtener el personaje ${id}`)
}

async function obtenerPersonajes() {
  var ids = [1, 2, 3, 4, 5, 6, 7]
  var promesas = ids.map(id => obtenerPersonaje(id))
  try {
    var personajes = await Promise.all(promesas)
    console.log(personajes)
  } catch (id) {
    onError(id)
  }
}

obtenerPersonajes()