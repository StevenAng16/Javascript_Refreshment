
//Hoisting
//Hoisted
//Var & Function
b = 7
var b
console.log(b)
//7

callMe()
function callMe(){
    console.log('Hello Bro!')
}
//Hello Bro!


//Non Hoisted
//Let & Const
//a = 7
//let a
//console.log(a)
//Uncaught ReferenceError: Cannot access 'a' before initalization

//console.log(a)
//const c =7
//Uncaught ReferenceError: Cannot access 'c' before initalization