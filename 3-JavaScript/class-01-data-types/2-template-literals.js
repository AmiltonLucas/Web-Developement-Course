console.log('test');
console.log("test");
console.log(`test`);

let course = "Desenvolvimento Web"
console.log("Turma de " + course);
// ⬆ concatenation > concatenação ⬆

let num1 = "10";
let num2 = 20;

num1 = Number(num1);
console.log(num1 + num2);
// ⬆ type coersion > digita coerção ⬆

console.log("A soma de Num1 + Num2 é: " + (num1 + num2)); 
// ⬆ grouping operator > Operador de Grupo ⬆

console.log("A soma de " + num1 + " e " + num2 + " é: " + (num1 + num2));
// ⬆ interpolation > Interpolação ⬆

const sumNumbers = num1 + num2;
console.log(`A soma de ${num1} e ${num2} é: ${sumNumbers}`);
// ⬆ template literals > Literais de Modelo ⬆ 