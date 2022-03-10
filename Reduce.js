
//Reduce

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
//1 + 2 + 3 + 4
console.log(array1.reduce(reducer)); //10

//Melakukan operasi pada setiap elemen array menjadi nilai tunggal (dari kiri ke kanan)