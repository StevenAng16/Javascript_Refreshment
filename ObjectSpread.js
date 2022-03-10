
//Object
/*
const a = {p : 1, q : 2};
const b = {...a};
console.log(b); // {p : 1, q : 2}
*//*
const a = {a:1};
const b = {b:2};
const c = {...a, ...b};
console.log(c) // {a:1, b:2}
*//*
const a = {a:1};
const b = {b:2};
const c = {...b};
console.log(c) // {a:1, b:2}
*//*
const a = {a:1, b:2};
const b = {a:1, b:2};
const c = {...a, ...b};
console.log(c) // {a:1, b:2}
*/