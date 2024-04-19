const score = 400
console.log(score);

const balance = new Number(100.03)
console.log(balance);

console.log(balance.toString()); //conversion of number to string after that we can apply all string methods
console.log(balance.toString().length); //it counts the length of string

console.log(balance.toFixed(3)); //fixed the number of precision


const otherNumber = 23.8966
const otherNumber2 = 123.8966

console.log(otherNumber.toPrecision(2)); //it gives the precison of number
console.log(otherNumber2.toPrecision(3)); //it return string as a constant
console.log(otherNumber.toPrecision(4)); 

const hundreds = 1000000
console.log(hundreds.toLocaleString()); //it gives readable format in eng standard
console.log(hundreds.toLocaleString('en-IN')) //in indian standard