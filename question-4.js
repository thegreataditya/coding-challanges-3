console.log(a);
// console.log(b); //ReferenceError: b is not defined
// console.log(c); //ReferenceError: c is not defined

{
  //Before declaration inside local scope
  console.log(a);
  //console.log(b) //ReferenceError: Cannot access 'b' before initialization
  //console.log(c) //ReferenceError: Cannot access 'c' before initialization
  var a = 3;
  let b = 2;
  const c = 5;
  //After declaration inside local scope
  console.log(a);
  console.log(b);
  console.log(c);
}

console.log(a);
//console.log(b); //ReferenceError: b is not defined
//console.log(c); //ReferenceError: c is not defined