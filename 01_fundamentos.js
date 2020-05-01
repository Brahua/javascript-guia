/*
1. Variables, Strings, Numeros
2. Funciones y Objetos
3.
*/

//1. Variables, Strings, Numeros
var nombre = "Sacha",
  apellido = "Lifszyc";
var edad = 28;
edad = "28 años";
console.log("Hola " + nombre + " " + apellido);
console.log("Tengo " + edad);

var nombreEnMayusculas = nombre.toUpperCase();
var apellidoEnMinusculas = apellido.toLowerCase();
var primeraLetraDelNombre = nombre.charAt(0);
var cantidadDeLetrasDelNombre = nombre.length;
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`;
var str = nombre.substr(1, 2); //(posicion,cantidad)

var peso = 75;
var jugarAlFutbol = 3;
peso -= jugarAlFutbol; //peso = peso-jugarAlFutbol
var precioDeVino = 200.3;
var total = Math.round(precioDeVino * 100 * 3) / 100;
var totalStr = total.toFixed(3); //cantidad de decimales pero devuelve string
var total2 = parseFloat(totalStr); //convierte string a decimal
var pizza = 8;
var personas = 2;
var cantidadDePorcionesPorPersona = pizza / personas;

//2. Funciones, Objetos, Comparaciones
function imprimirEdad(n, e) {
  console.log(`${n} tiene ${e} años`);
}
imprimirEdad("Josue", 23);

var sacha = {
  nombre: "Sacha",
  apellido: "Lifszyc",
  edad: 28
};
var dario = {
  nombre: "Darío",
  apellido: "Susnisky",
  edad: 27
};

//Destructurando objetos
function imprimirNombreEnMayusculas({ nombre }) {
  console.log(nombre.toUpperCase());
}
function imprimirNombreEnMayusculas2(persona) {
  // var nombre = persona.nombre
  var { nombre } = persona;
  console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(sacha);
imprimirNombreEnMayusculas(dario);
imprimirNombreEnMayusculas2({ nombre: "Pepito" });

function cumpleanos(persona) {
  //Retorna un nuevo objeto de tipo persona con todos los valores anteriores
  return {
    ...persona,
    edad: persona.edad + 1
  };
}

var a = 1;
var b = "1";
a == b; // Los valores se comparan conviertiendose internamente a un mismo tipo
a === b; // Verifica valor y tipo, mas preciso.

//3. Condicionales (If-Else-Switch)
var sacha = {
  nombre: "Sacha",
  apellido: "Lifszyc",
  edad: 28,
  ingeniero: false,
  cocinero: false,
  cantante: true,
  dj: false,
  guitarrista: false,
  drone: false
};

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es:`);

  if (persona.ingeniero) {
    console.log("Ingeniero");
  } else {
    console.log("No es ingeniero");
  }

  if (persona.cocinero) {
    console.log("Cocinero");
  }

  if (persona.dj) {
    console.log("DJ");
  }

  if (persona.cantante) {
    console.log("Cantante");
  }

  if (persona.guitarrista) {
    console.log("Gutiarrista");
  }

  if (persona.drone) {
    console.log("Piloto de drone");
  }
}
imprimirProfesiones(sacha);

const MAYORIA_DE_EDAD = 18;
function esMayorDeEdad(persona) {
  return persona.edad >= MAYORIA_DE_EDAD;
}
function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} es menor de edad`);
  }
}

var signo = prompt("¿Cuál es tu signo?");
switch (signo) {
  case "acuario":
    console.log(
      "Intente aislarse del mundo y sentarse en soledad a reflexionar sobre ciertas cuestiones de su vida que últimamente no lo dejan progresar de la manera que anhela."
    );
    break;
  case "piscis":
    console.log(
      "Sepa que de ahora en más, su futuro solo dependerá de usted solo. Entienda que ya está capacitado para tomar sus propias decisiones y realizar los planes deseados."
    );
    break;
  case "cancer":
  case "cáncer":
    console.log(
      "Dentro su cabeza le surgirán ideas extraordinarias, sobre todo si se dedica a actividades creativas donde pueda ponerlas en práctica."
    );
    break;
  case "aries":
    console.log(
      "Deje de preocuparse más de lo necesario, ya que podría sufrir una crisis de estrés. Ese problema que lo tiene inquieto, se resolverá de la manera menos esperada."
    );
    break;
  case "tauro":
    console.log(
      "Se sentirá agobiado por sus responsabilidades, déjese ayudar por la gente que lo quiere. Procure aceptar los consejos y recapacitar sobre los errores cometidos."
    );
    break;
  case "geminis":
  case "géminis":
    console.log(
      "Sepa que en pocos días recuperará su armonía mental. De esta forma, podrá llevar a cabo todos los proyectos que tiene en mente con claridad y constancia."
    );
    break;
  case "leo":
    console.log(
      "Intente hacer lo posible para superar los miedos que lo agobian cada vez que debe tomar una decisión importante en su vida. Relájese."
    );
    break;
  case "virgo":
    console.log(
      "Esté atento a los asuntos familiares que tiene pendientes hace días. Sepa que la Luna en su signo le permitirá lograr todo lo que se proponga en el día."
    );
    break;
  case "libra":
    console.log(
      "Tenderá a ofenderse por todo y considerar enemigas a todas las personas que lo estiman de verdad, ya que estará muy vulnerable a las críticas en el día de hoy."
    );
    break;
  case "escorpio":
    console.log(
      "Aprenda que todo cambio en la vida siempre es muy constructivo. Momento óptimo para hacer un alto en su vida y ver desde otro punto de vista las cosas."
    );
    break;
  case "sagitario":
    console.log(
      "Debe tener presente que quienes no comparten sus ideas o decisiones, no siempre son necesariamente sus enemigos. Respete las opiniones de los demás."
    );
    break;
  case "capricornio":
    console.log(
      "Si pretende sentirse más feliz, use aquello que ha aprendido a lo largo de su vida. Pronto mejorarán las condiciones actuales que lo agobian a diario."
    );
    break;
  default:
    console.log("No es un signo zodiacal válido");
    break;
}

//4. Arrow functions
function newFunction(a, b) {
  return a + b;
}
var c = (a, b) => a + b;

function esMayor(persona) {
  return persona.edad >= MAYORIA_DE_EDAD;
}
var c = ({ edad }) => edad >= MAYORIA_DE_EDAD;

//5.Loop for - while - do while - switch
var sacha = {
  nombre: "Sacha",
  apellido: "Lifszyc",
  edad: 28,
  peso: 75
};

console.log(`Al inicio del año ${sacha.nombre} pesa ${sacha.peso}kg`);

const INCREMENTO_PESO = 0.2;
const DIAS_DEL_ANO = 365;

const aumentarDePeso = persona => (persona.peso += INCREMENTO_PESO);
const adelgazar = persona => (persona.peso -= INCREMENTO_PESO);

for (var i = 1; i <= DIAS_DEL_ANO; i++) {
  var random = Math.random();

  if (random < 0.25) {
    aumentarDePeso(sacha);
  } else if (random < 0.5) {
    adelgazar(sacha);
  }
}

console.log(`Al final del año ${sacha.nombre} pesa ${sacha.peso.toFixed(1)}kg`);

const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;
const META = sacha.peso - 3;
var dias = 0;

while (sacha.peso > META) {
  if (comeMucho()) {
    aumentarDePeso(sacha);
  }
  if (realizaDeporte()) {
    adelgazar(sacha);
  }
  dias += 1;
}

console.log(`Pasaron ${dias} días hasta que ${sacha.nombre} adelgazó 3kg`);

var contador = 0;
const llueve = () => Math.random() < 0.25;

do {
  contador++;
} while (!llueve());

if (contador === 1) {
  console.log(`Fui a ver si llovía ${contador} vez`);
} else {
  console.log(`Fui a ver si llovía ${contador} veces`);
}

//6. Arrays
var sacha = {
  nombre: "Sacha",
  apellido: "Lifszyc",
  altura: 1.72
};
var alan = {
  nombre: "Alan",
  apellido: "Perez",
  altura: 1.86
};
var martin = {
  nombre: "Martin",
  apellido: "Gomez",
  altura: 1.85
};
var personas = [sacha, alan, martin]

//Filter
for (var i = 0; i < personas.length; i++) {
  var persona = personas[i]
  console.log(`${persona.nombre} mide ${persona.altura}mts`)
}
const esAlta = ({ altura }) => altura > 1.8
var personas = [sacha, alan, martin, dario, vicky, paula]
var personasAltas = personas.filter(esAlta)
// var personasAltas = personas.filter(function (persona) {
//   return persona.altura > 1.8
// })
console.log(personasAltas)

//Map
const pasarAlturaACms = persona => ({
  ...persona,
  altura: persona.altura * 100
})
var personasCms = personas.map(pasarAlturaACms)
console.log(personasCms)

//Reduce
const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros
var totalDeLibros = personas.reduce(reducer, 0)
// var acum = 0
//
// for (var i = 0; i < personas.length; i++) {
//   acum = acum + personas[i].cantidadDeLibros
// }
// var totalDeLibros = acum;

const person = [
  { name: 'Jim', color: 'blue', age: 22, },
  { name: 'Sam', color: 'blue', age: 33, },
  { name: 'Eddie', color: 'green', age: 77, },
];

const sumOfAges = person.reduce((sum, currentValue) => {
  return sum + currentValue.age;
}, 0);

const groupBy = (array, key) => {
  // Return the end result
  return array.reduce((result, currentValue) => {

    /*
    --- primera forma ---
    if (result[currentValue[key]]) {
      result[currentValue[key]].push(currentValue);
    } else {
      result[currentValue[key]] = [];
      result[currentValue[key]].push(currentValue);
    }
    */

    /* 
      --- segunda forma ---
      let arraySection = (result[currentValue[key]] = result[currentValue[key]] || [])
      arraySection.push(currentValue);
    */

    (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);


    // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
    return result;
  }, {}); // empty object is the initial value for result object
};
const personGroupedByColor = groupBy(person, 'color');
console.log(personGroupedByColor);



//Find
const esGomez = persona => persona.apellido === "Gomez";
var personaEncontrada = personas.find(esGomez);
console.log(personaEncontrada)

//Foreach
personas.forEach(persona => console.log(persona.nombre));

//Some -> a diferencia del filter, devuelve verdader o falso
var hayPersonasBajas = personas.some(persona => persona.altura <= 1.80);
