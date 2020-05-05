//1. Type, Type Inference y Type keyword
let a: string = "hola"; // -> type
let b = 2; // type inference
let anyValue: any = 2;
anyValue = "HOLA";

function suma(num1: number, num2: number): number {
  return num1 + num2;
}

type dni = string; // -> type keyword
let dniPersona1: dni = "32131321";
let dniPersona2: dni = "sda";

//2. Clases
class Transporte {
  private velocidad: number;
  private formaDeMovilidad: string;

  constructor(velocidad: number, formaDeMovilidad: string) {
    this.velocidad = velocidad;
    this.formaDeMovilidad = formaDeMovilidad;
  }

  getVelocidad() {
    return this.velocidad;
  }
  setVelocidad(velocidad: number) {
    this.velocidad = velocidad;
  }

  getFormaDeMovilidad() {
    return this.formaDeMovilidad;
  }
  setFormaDeMovilidad(formaDeMovilidad: string) {
    this.formaDeMovilidad = formaDeMovilidad;
  }
}
const transporte: Transporte = new Transporte(20, "suelo");

class Auto extends Transporte {
  private cantidadDePuertas: number;

  constructor(
    velocidad: number,
    formaDeMovilidad: string,
    cantidadDePuertas: number
  ) {
    super(velocidad, formaDeMovilidad);
    this.cantidadDePuertas = cantidadDePuertas;
  }

  getVelocidad() {
    return super.getVelocidad() + 10;
  }

  getCantidadDePuertas() {
    return this.cantidadDePuertas;
  }

  setCantidadDePuertas(cantidadDePuertas: number) {
    this.cantidadDePuertas = cantidadDePuertas;
  }
}
const auto: Auto = new Auto(20, "suelo", 4);

//3.Interfaces
interface Saludar {
  decirHola();
}
class SaludarEspaniol implements Saludar {
  decirHola() {
    return "Hola!!!";
  }
}
class SaludarIngles implements Saludar {
  decirHola() {
    return "Hello!!!";
  }
}

const saludo: Saludar = new SaludarEspaniol();

//4. Shapes
class Persona {
  nombre: string;
  apellido: string;
  dni: number;

  constructor(nombre: string, apellido: string, dni: number) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
  }
}

class Alumno extends Persona {
  matricula: string;

  constructor(
    nombre: string,
    apellido: string,
    dni: number,
    matricula: string
  ) {
    super(nombre, apellido, dni);
    this.matricula = matricula;
  }
}

let persona: Persona = new Persona("Jose", "Gonzales", 31321321);
let alumno: Alumno = new Alumno("Josue", "Bravo", 42334242, "232");

persona = alumno;
//alumno = persona // -> da error

//5. Union Types
type SumaParemeter = string | number;
type SumaReturnType = string | number;
function SumaFunction1(
  num1: SumaParemeter,
  num2: SumaParemeter
): SumaReturnType {
  return Number(num1) + Number(num2);
}
function SumaFunction2(
  num1: SumaParemeter,
  num2: SumaParemeter
): SumaReturnType {
  return String(num1) + String(num2);
}

//6. Intersection Types
interface Interface1 {
  prop1: number;
}
interface Interface2 {
  prop2: string;
}
type InterfaceMix = Interface1 & Interface2;
const interfaceMix: InterfaceMix = {
  prop1: 2,
  prop2: "cadena"
};

//7. Function types
type CallBackError = Error | null;
type CallBack = (error: CallBackError, response: Object) => void;
type SendRequest = (cb: CallBack) => void;

const sendRequest: SendRequest = (cb: CallBack): void => {
  if (cb) {
    cb(null, { message: "Succesfull!" });
  }
};

//8. Decorators: aplicación en métodos
function log(target, key) {
  //target: el objeto contenedor (en este caso: Profesor)
  //key: la funcion a donde se aplica (en este caso: sayMyName)
  console.log(key + "se ha llamado");
}

class Profesor {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  @log
  sayMyName() {
    console.log(this.name);
  }
}
const profesor: Profesor = new Profesor("Gabriel");
profesor.sayMyName();

//9. Decorators: aplicación en clases
function init(target) {
  return class extends target {
    nombre: "Alberto";
    apellido: "Rodriguez";

    sayMyName() {
      return `${this.nombre} + ${this.apellido}`;
    }
  };
}

@init
class P {
  constructor() {}

  sayMyName() {}
}

const p: P = new P();
console.log(p.sayMyName());

//10. Decorators: aplicación en propiedades
function logProperty(target, key) {
  let _val = target[key];

  const getter = () => {
    console.log(`Get: ${key} => ${_val}`);
    return _val;
  };

  const setter = newValue => {
    console.log(`Set: ${newValue} => ${key}`);
    _val = newValue;
  };

  const objectProperty = {
    get: getter,
    set: setter
  };

  // Sobre-escritura de las propiedades
  Object.defineProperty(target, key, objectProperty);
}

class Persona2 {
  @logProperty
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const p2 = new Persona2("Alan");
p2.name = "Platzi"; // Set: name => 'Platzi'
const myName = p2.name; // Get: name => 'Platzi'

//11. Decorators: aplicación en parámetros
function logParameter(target: any, propertyName: any, index: any) {
  const metadataKey = `log_${propertyName}_parameters`;
  
  if (Array.isArray(target[metadataKey])) {
    target[metadataKey].push(index);
  } else {
    target[metadataKey] = [index];
  }
  console.log(target[metadataKey]);
}

class A {
  greet(message: string, @logParameter additional: string): string {
    return message;
  }
}

const p3 = new A();
p3.greet("Hola", "Enrique");
