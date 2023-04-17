let a = 5;
let b = 10;

//console.log(c); //accessing "c" before function call in global scope(Error)

sum(a, b);

//console.log(c); //accessing "c" after function call in global scope(Error)

function sum(x, y) {
  console.log(c); //accessing "c" before declaration in local scope
  var c = x + y;
  console.log(c); //accessing "c" after declaration in local scope
}