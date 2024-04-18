const name = "mithilesh"
const repoCount = 2

// console.log(name  + repoCount + "value"); this is old 


// string interpolation
console.log(`Hello my name is ${name} and my rapo count is ${repoCount}`);

// string declaration in another way


 const gameName = new String('mithilesh-g-hai')
console.log(typeof(gameName))
console.log(gameName);

// console.log(gameName[0]);  //key value pair access
//console.log(gameName.__proto__);
// console.log(gameName.length);  // find length of string
// console.log(gameName.toUpperCase()); // to convert into upper case
// console.log(gameName); // there is no change in original value
 console.log(gameName.charAt(2))   //find the position of character in this we use charachter as input  
console.log(gameName.indexOf('t'));    // in indexOf we use character                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
const newstring = gameName.substring(0,4)  //it does not allow negative value
console.log(newstring);

const anotherString = gameName.slice(-8,4) //it alse takes negative values
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.cm/hitesh%20choudhary"

console.log((url.replace('%20','-'))) //for replacement in link

console.log(url.includes('sundar')) // it gives words are included or not

console.log(gameName.split('-'));