const array = [1, 2, 3];

function nameFunc(params) {
  return "A";
}

const myFunc = function () {
  return "A";
};

const myNewFunction = (name) => `Meu é ${name}`;

const newArray = array.map((value) => value * 2);

console.log(array);
console.log(newArray);

const films = ["De volta para o futuro", "Rambo", "Rock", "O guarda-costas"];

const newFilms = films.map((film) => film.toUpperCase());
console.log(newFilms);

const arrayDollar = [1, 2, 3000];
const realConverted = arrayDollar.map((value) => value * 4.915);
console.log(arrayDollar)
console.log(realConverted);

const rectangles = [
  { width: 4, height: 5 },
  { width: 7, height: 3 },
  { width: 2, height: 8 },
];

const areas = rectangles.map((rectangle, index) => {
  return {
    name: `Retângulo ${index + 1}`,
    area: rectangle.width * rectangle.height + "m²",
  };
});

console.log(areas);
console.table(areas);

const arrayNames = ["joão", "emanuel", "vieira", "quintino"];

const capitalizeNames = arrayNames.map((name) => {
  return name[0].toUpperCase() + name.slice(1);
});

console.log(capitalizeNames.join(" "));