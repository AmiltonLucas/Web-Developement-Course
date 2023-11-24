const gameName = prompt("Digite o nome:");
const gameGenre = prompt("Digite o gênero:");
const gameReleaseYear = prompt("Digite o ano de lançamento:");

const game = {
    name: gameName,
    genre: gameGenre,
    ReleaseYear: gameReleaseYear,
};

console.log(game.name);
console.log(game.genre);
console.log(game.ReleaseYear);