
/*
  !6 = 6 * 5 * 4 * 3 * 2 * 1 = 720
  !12 = 12 * 11 * 10 * 9 * 8 * 7 * !6


  La memoización es una técnica de programación que nos permite ahorrar cómputo o procesamiento en JavaScript, al ir almacenando el resultado invariable de una función para que no sea necesario volver a ejecutar todas las instrucciones de nuevo, cuando se vuelva a llamar con los mismos parámetros. Es similar a usar memoria cache.
*/

function factorial(n) {
  if (!this.cache) {
    this.cache = {}
  }

  debugger
  if (this.cache[n]) {
    return this.cache[n]
  }

  if (n === 1) {
    return 1
  }

  this.cache[n] = n * factorial(n - 1)
  debugger
  return this.cache[n]
}