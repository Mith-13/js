let score = "33abc"
let mask = null
let score1 = undefined

console.log(typeof score);

let valueInNumber = Number(score)
let valueInNum=Number(mask)
let ValueInscore1=Number(score1)
console.log(typeof(valueInNumber));
console.log(valueInNumber);//it gives a NaN as output means it is not a number
console.log(mask);
console.log(typeof(mask))
console.log(valueInNum);
console.log(score1);
console.log(ValueInscore1);
//"33" =>33
//"33abc" =>NaN
//true => 1; false =>0
let isLoggedIn = "mithilesh";
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
// 1=> true 0 =>false
//"" =>false
// "mithilesh" =>true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof(stringNumber))