function convertToKmh(speedMs) {
    return speedMs * 3.6;
}

const userSpeedMs = prompt("Digite a velocidade em M/s:");

alert(convertToKmh(userSpeedMs));
console.log("test");