let randomNumber = 0; //Math.floor(Math.random() * 100 + 1);

//Sintaxis basica
describe("Valor de PI", () => {
  it("Es igual que 3.141", () => {
    expect(pi()).toEqual(3.141);
  });
});

describe("Valor de Sen(x)", () => {
  it("Es menor igual que 1", () => {
    expect(sin(randomNumber) <= 1).toBeTruthy();
  });

  it("Es mayor igual que -1", () => {
    expect(sin(randomNumber) >= -1).toBeTruthy();
  });
});

//toBe() -> para tipos primitivos
//toEqual() -> para tipos primitivos y objetos

//BeforeEach usado para ejecutar funciones asincronas antes de ejecutar la prueba.
//AfterEach se ejecuta luego de cada it()
//Asi mismo tambien existen los metodos BeforeAll y AfterAll
describe("Uso del BeforeEach", () => {
  let pais = "España";

  beforeEach(done => {
    setTimeout(() => {
      pais = "Peru";
      done();
    }, 1500);
  });

  it("Es de Peru", () => {
    expect(pais).toBe("Peru");
  });
});
