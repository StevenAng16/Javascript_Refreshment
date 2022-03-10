
//Scoping


//Global Scope
var name = 'Bani'
let age = 23
const isMarried = true

//Function/Local Scope
function countAverage(){
    var num1 = 7
    let num2 = 8
    const num3 = 9
}
console.log(num1)
//Uncaught ReferenceError: num1 is not defined
console.log(num2)
//Uncaught ReferenceError: num2 is not defined
console.log(num3)
//Uncaught ReferenceError: num3 is not defined

//Block Scope
if(true){
    var num1 = 7
    let num2 = 8
    const num3 = 9
    num4 = num1 + num2 + num3
}
console.log(num1)
//7
//undefined
console.log(num2)
//Uncaught ReferenceError: num2 is not defined
console.log(num3)
//Uncaught ReferenceError: num3 is not defined
console.log(num4)
//24