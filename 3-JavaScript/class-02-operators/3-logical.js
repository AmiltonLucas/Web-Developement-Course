// Logical Operators (Boolean)

// and &&
// or ||
// not !

// Go to walt Disney?
let name = Lucas;

let credCard = false;
let hasCred = true;

console.log(!true);
console.log(!!credCard);

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log("Viagem: " + (credCard && hasCred && true));

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// Truthy                    Falsy
// 1, 1.5, -1                0
// "", "0", "false"          ""
// {}                        null
// []                        undefined
// Infinity, -Infinity       NaN

console.log(1 ? "true" : "false");
console.log(0 ? "true" : "false");
console.log(-1 ? "true" : "false");
console.log("text" ? "true" : "false");
console.log(" " ? "true" : "false");
console.log("0" ? "true" : "false");
console.log("FALSE" ? "true" : "false");
console.log({name: Amilton} ? "true" : "false");
console.log({} ? "true" : "false");
console.log([] ? "true" : "false");
console.log(null ? "true" : "false");
console.log(undefined ? "true" : "false");
console.log(-Infinity ? "true" : "false");
console.log(NaN ? "true" : "false");

// Nullish/Logical Coalescing Operator
console.log("Lucas" || "Test");
console.log("" || "Test");
console.log(0 || "Test");

console.log(0 ?? "Test");
console.log(false ?? "Test");
console.log(null ?? "Test");
console.log(undefined ?? "Test");