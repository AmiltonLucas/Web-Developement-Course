let myName = "Lucas";

// Prototype (chain)
console.log(myName.__proto__);

console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());
console.log(myName.slice(3));
console.log(myName.slice(-3));
console.log(myName.slice(0, -2));

// ["A" , "B" , "C"]
//   0     1     2
//  -3    -2    -1

console.log(myName.substring(0, 3));
console.log(myName[0]);

myName[0] = "Q";
console.log(myName); // String Immutable

myName = "outer text";
console.log(myName);

let phrase = "I'm a web developer";
console.log(phrase.replace("web", "JavaScript"));
console.log(phrase.indexOf("w"));
console.log(phrase.trim());
console.log(phrase.trim().split(" "));
console.log(phrase.trim().split(" ").join(" - "));
console.log(phrase.trim().split("").reverse().join(""));

console.log(phrase.includes("web"));
console.log(phrase.includes("Web"));
console.log("web" == "Web"); // case-sensitive

console.log(phrase.toLowerCase().includes("WEB".toLowerCase()));

myName.concat;

function log() {
    return "print";
}

console.log(print);