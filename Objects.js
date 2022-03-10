
//Objects

//let x = [1];
//let y = x;

const ar1 = [1];
const ar2 = [1];
console.log(ar1 === ar2); //false
console.log(ar1 === [1]); //false
const ar3 = ar1
console.log(ar1 === ar3); //true
console.log(ar1 === ar1); //true