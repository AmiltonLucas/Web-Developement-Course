const dateNowMillsec = new Date().getTime();
const dateNow = new Date();

console.log(dateNowMillsec);
console.log(dateNow.toLocaleString("pt-br"));
console.log(dateNow.toLocaleDateString("pt-br"));
console.log(dateNow.toLocaleTimeString("pt-br"));

console.log(dateNow.getDay());
console.log(dateNow.getDate());
console.log(dateNow.getMonth());
console.log(dateNow.getFullYear());

console.log(dateNow.getDate() + 1);

dateNow.setDate(dateNow.getDate() + 30);
dateNow.setMonth(dateNow.getMonth() + 1);
dateNow.setFullYear(dateNow.getFullYear() + 10);

console.log(dateNow.toLocaleDateString("pt-br"));

console.log(dateNow.getHours() + 23);
console.log(dateNow.getMinutes() + 60);
console.log(dateNow.getSeconds() + 60);
console.log(dateNow.getMilliseconds() + 1000);

console.log(
  dateNow.toLocaleDateString("pt-br") + ":" + dateNow.getMilliseconds()
);
console.log(dateNow);

console.log(
  dateNow.toLocaleDateString("pt-br", {
    weekday: " long",
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
);

const date1 = new Date("2023-12-27");
const date2 = new Date("2023-09-25");
console.log((date1 - date2) / 1000 / 60 / 24);
