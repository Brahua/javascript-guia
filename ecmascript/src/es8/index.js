// 1.Object.entries -> Devuelve clave y valor de un objeto en forma de matriz
const data = {
  frontend: "Oscar",
  backend: "ISabel",
  design: "Ana"
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const data = {
  frontend: "Oscar",
  backend: "ISabel",
  design: "Ana"
};

// 2.Object.values -> Devuelve los valores del objeto en un arreglo
const values = Object.values(data);
console.log(values);
console.log(values.length);

// 3. pad
const string = "hello";
console.log(string.padStart(7, "hi"));
console.log(string.padEnd(12, " -----"));
console.log("food".padEnd(12, "  -----"));

const obj = {
  name: "oscar"
};

// 4. async & await
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    false
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("Test Error"));
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();
