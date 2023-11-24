let num = 10; //Global
const pi = 3.14;

// var myName = "Lucas";
var myName;

{
    let num = "Local"; //Local
    var myName = "Amilton";

    num = 30;
    console.log(num);
    console.log(pi);
    console.log(myName);
}

num = 40;
// pi = 100; const error

console.log(num);
console.log(pi);

console.log(myName);