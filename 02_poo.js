/*
1. Protoypes
*/

//1. Prototypes
function Persona(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}

Persona.prototype.saludar = function() {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};

var sacha = new Persona("Sacha", "Lifszyc");
var erika = new Persona("Erika", "Luna");
var arturo = new Persona("Arturo", "Martinez");

//2. Herencia prototipal
function heredaDe(prototipoHijo, prototipoPadre) {
  var fn = function() {};
  fn.prototype = prototipoPadre.prototype;
  prototipoHijo.prototype = new fn();
  prototipoHijo.prototype.constructor = prototipoHijo;
}

function Desarrollador(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}

heredaDe(Desarrollador, Persona);

Desarrollador.prototype.saludar = function() {
  console.log(
    `Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`
  );
};

//3. Clases
class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
  }

  saludar() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
  }

  soyAlto() {
    return this.altura > 1.8;
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura);
  }

  saludar() {
    console.log(
      `Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`
    );
  }
}
