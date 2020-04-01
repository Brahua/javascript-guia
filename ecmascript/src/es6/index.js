// 1. Default Params
function newFunction(name, age, country) {
  var name = name || "oscar";
  var age = age || 32;
  var country = country || "MX";
  console.log(name, age, country);
}
//es6
function newFunction2(name = "oscar", age = 32, country = "MX") {
  console.log(name, age, country);
}

// 2. Concatenación (Template Literal)
let hello = "Hello";
let world = "World";
let greeting = hello + " " + world;
//es6
let greeting2 = `${hello} ${world}`;
console.log(greeting2);

// 3. Multilínea
let lorem = "lorem ipsum \n" + " lorem ipsum";
//es6
let lorem2 = `una nueva
frase en esta linea`;

// 4. Destructuración
let person = {
  name: "Antonio",
  age: "28",
  country: "Ambato"
};
console.log(person.name, person.age, person.country);
//es6
let { name, age, country } = person;
console.log(name, age, country);

// 5. Spread Operator
let team1 = ["Oscar", "Julian", "Ricardo"];
let team2 = ["Valeria", "Yessenia", "Camila"];
//es6
let education = ["David", ...team1, ...team2];
console.log(education);

// 6. Parametros en objetos
let name = "oscar";
let age = 32;
obj = { name: name, age: age };
//es6
obj2 = { name, age };
console.log(obj2);

// 7. Arrow functions
const names = [
  { name: "Oscar", age: 32 },
  { name: "Yesica", age: 27 }
];

let listOfNames = names.map(function(item) {
  console.log(item.name);
});

//es6
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
  //...
};

const listOfNames4 = name => {
  //...
};

const square = num => num * num;

// 8. Promesas
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve("Hey!");
    } else {
      reject("Ups!!");
    }
  });
};

helloPromise()
  .then(response => console.log(response))
  .catch(error => console.log(error));

// 9. Clases
class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

// 10. Módulos
import { hello } from "./module";

hello();

// 11. Generadores
function* helloWorld() {
  if (true) {
    yield "Hello, ";
  }
  if (true) {
    yield "World";
  }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
