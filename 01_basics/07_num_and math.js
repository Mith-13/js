const score = 400
// console.log(score);

const balance = new Number(100.03)
//console.log(balance);

// console.log(balance.toString()); //conversion of number to string after that we can apply all string methods
// console.log(balance.toString().length); //it counts the length of string

//console.log(balance.toFixed(3)); //fixed the number of precision


const otherNumber = 23.8966
const otherNumber2 = 123.8966

// console.log(otherNumber.toPrecision(2)); //it gives the precison of number
// console.log(otherNumber2.toPrecision(3)); //it return string as a constant
// console.log(otherNumber.toPrecision(4)); 

const hundreds = 1000000
// console.log(hundreds.toLocaleString()); //it gives readable format in eng standard
// console.log(hundreds.toLocaleString('en-IN')) //in indian standard

// ********************* Maths ******************************

// console.log(Math); //it gives math as object
// console.log(Math.abs(-4));   //abs used for conversion of negative sign into positive sign
// console.log(Math.round(4.3)); //it round of the value upto 4
// console.log(Math.ceil(4.2));  //it gives the ceiling value
// console.log(Math.floor(4.9)); //it gives the floor value
// console.log(Math.min(4,3,6,8)); // it gives maximum value
// console.log(Math.max(4,3,6,8)); //it gives minimum value


console.log(Math.random()); //it always gives the random value between 0 and 1.
console.log(Math.random()*10+1); //it gives number between 1 and 10


const min = 10;
const max = 20;
console.log(Math.floor(Math.random () * (max-min+1) +min)) //it gives the any random value between any two given number