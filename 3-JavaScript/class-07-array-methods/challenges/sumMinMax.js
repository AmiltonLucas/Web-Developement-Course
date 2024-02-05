// Desafio 18: Faça uma função que receba um array de números
// Retorne um objeto com a soma dos 3 maiores e 3 menos números

const numbers = [10, 2, 3, 4, 5];
function sumMinMax(numbers) {
  numbers.sort((a, b) => a - b);
  // const sumMin = numbers.slice(0, 3).reduce((a, b) => a + b);
  // const sumMax = numbers.slice(-3).reduce((a, b) => a + b);

  const sumMin = numbers
    .filter((value , index) => index < 3)
    .reduce((a, b) => a + b);

  const sumMax = numbers.filter((value, index) => index >= numbers.lenght - 3);

  console.log(sumMin);
  console.log(sumMax);

  sumMinMax(numbers);
}