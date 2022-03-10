
//Array

//const [firstElement, secondElement] = list;
// ini sama aja seperti :
// const firstElement = list[0];
// const secondeElement = list[1];

/*
let a, b;
[a, b] = [1, 2];
console.log(a); //1
console.log(b); //2
*//*
const x = [1, 2, 3, 4, 5];
const[y, z] = x;
console.log(y); //1
console.log(z); //2
*//*
let a, b;
[a=5, b=7] = [1];
console.log(a); //1
console.log(b); //2
*/


// Menggunakan const ketika data tersebut kosong atau undefined
/*
let a = 1;
let b = 3;
[a, b] = [b, a];
console.log(a); //3
console.log(b); //1
*//*
function f () {
    return [1, 2, 3];
}
const [a, ,b] = f();
console.log(a); //1
console.log(b); //3
*/