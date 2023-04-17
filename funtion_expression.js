let a = 5;
let b = 10;

let c = multiply(a, b); //Error: cannot access multiply before it is initialised

console.log(c);

let multiply = function (x, y) {
  return x * y;
};