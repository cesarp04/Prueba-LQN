/* Desarrolla un algoritmo que imprima los números del 0 al 100. Adicionalmente debe
imprimirse en la misma línea la palabra buzz en caso de que el número sea par. Sí el
número es múltiplo de 5 debe imprimirse en la misma línea la palabra bazz. */

for (let i = 0; i <= 100; i++) {
  const element = i
  if (!element) {
    console.log(element)
  } else if (element % 5 === 0 && element % 2 === 0) {
    console.log(element, ' buzz bazz')
  } else if (element % 2 === 0) {
    console.log(element, ' buzz')
  } else if (element % 5 === 0) {
    console.log(element, ' bazz')
  } else {
    console.log(element)
  }
}
