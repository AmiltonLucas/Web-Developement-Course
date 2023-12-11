function printText(text) {
  console.log(text);
}

sumNumbers("A Usurpadora"); // arguments
sumNumbers("Maria do Bairro"); // arguments
sumNumbers("Rebelde"); // arguments
sumNumbers(123); // arguments

function sumNumbers(num1, num2) {
  const sum = num1 + num2;
  return sum;
}

console.log(sumNumbers(20, 3));

const result = sumNumbers(2, 30);
console.log(result);

sumNumbers(20, 3);
sumNumbers(2, 30);
sumNumbers(200, 300);
