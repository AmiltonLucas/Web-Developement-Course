const array = Array(1, "2", 3, () => "A", [], {});

console.log(array);
console.log(array.length);
console.log(array[1]);
console.log(array[3]); // daclaration
console.log(array[3]()); // execution

const films = [` "Se beber não case", "Legalmente Loira" , "American Pie" `];

// FIFO
films.push("Psicopata Americano");
console.log(films);

films.pop();
films.pop();
console.log(films);

// FIFO
films.unshift("Todo mundo em panico");
console.log(films);

films.shift();
films.shift();
console.log(films);

console.log(films.includes("Todo mundo em panico"));
console.log(films.includes("Psicopata Americano"));
console.log(films.indexOf("psicopata americano"));
console.log(films.join("<=>"));
console.log(films.splice(1, 3));
console.log(films);

const arrayLetters = ["A", "B", "C", "D", "E", "F"];
const index1 = arrayLetters[0];

// destructure
const [item1, item2, ...rest] = arrayLetters;

console.log(index1);
console.log(item1);
console.log(item2);
console.log(rest);
console.log(...arrayLetters); // spread

// value vs reference

// value
let num1 = 1;
let num2 = num1;

num1++;

console.log({ num1, num2 });

//reference
const numbers1 = [1, 2, 3];
const numbers2 = numbers1;

numbers1.pop();

console.log({ numbers1, numbers2 });

// const clone = [..numbers1]; //spread
const [...clone] = numbers1; // rest

numbers1.pop();

console.log({numbers1, numbers2});
console.log(clone);

