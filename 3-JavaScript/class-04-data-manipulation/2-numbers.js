console.log(Number(""));
console.log(Number(" "));
console.log(Number("Lucas"));
console.log(typeof Number("Lucas"));

console.log(isNaN(Number("Lucas")));

console.log(Number(null));
console.log(Number(true));
console.log(Number(false));
console.log(Number(undefined));

let num1 = 7.91891;
let num2 = 1515516162;

console.log(parseInt(num1));
console.log(parseFloat(num2));

console.log(String(num1).replace(".", "").length);

// 7,99 R$
console.log("R$ " + String(num1).replace(".", ","));

console.log(
  num1.toLocaleString("pt-br", { style: "currency", currency: "brl" })
);

console.log(
  num1.toLocaleString("pt-br", { style: "currency", currency: "usd" })
);

console.log(
  num1.toLocaleString("pt-br", { style: "currency", currency: "jpy" })
);

// match Funcitons

console.log(Match.PI);
console.log(match.E);
console.log(Match.sqrt(9));
console.log(Match.abs(num1));

const numbers = [2, 8, 10, 20, 6]
console.log(...numbers);
console.log(Match.max(...numbers)); // spread
console.log(Match.min(...numbers)); // spread

// 0-4 embaixo 5-9 => em cima
console.log(Match.round(2.4));
console.log(Match.round(2.5));
console.log(Match.floor(2.99999));
console.log(Match.ceil(2.0001));

console.log(Match.round(Match.random() * 10)); // 0-10
console.log(Match.ceil(Match.random() * 10)); // 1-10
console.log(Match.floor(Match.random() * 10)); // 0-9
console.log(Match.ceil(Match.random() * 25)); // 1-25