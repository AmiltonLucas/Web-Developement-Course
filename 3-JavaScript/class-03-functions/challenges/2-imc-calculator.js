function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    return imc;
}

function classificarIMC(imc) {
    // Classifica o IMC em categorias
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc < 25) {
        return "Peso normal";
    } else if (imc < 30) {
        return "Sobrepeso";
    } else if (imc < 35) {
        return "Obesidade Grau I";
    } else if (imc < 40) {
        return "Obesidade Grau II";
    } else {
        return "Obesidade Grau III";
    }
}

// Exemplo de uso:
const peso = parseFloat(prompt("Digite o peso em quilogramas:"));
const altura = parseFloat(prompt("Digite a altura em metros:"));

const imc = calcularIMC(peso, altura);
const categoria = classificarIMC(imc);

console.log("Seu IMC é " + imc.toFixed(2) + ", o que é classificado como: " + categoria);
