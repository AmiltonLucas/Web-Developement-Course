const number = Number(prompt("Digite um número"));
const result = number % 2 == 0 ? "Par" : number % 2 == 1 ? "Ímpar" : "inválido";
window.alert(`O número ${number} é ${result}!`)