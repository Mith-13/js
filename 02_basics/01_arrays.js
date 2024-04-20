// array 

// () =>PARANTHESIS
// {} =>braces
// [] =>bracket
// resizeable,INDEXIM


const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)

// console.log(myArr[2]); access of element

// Aray methods

// myArr.push(6)  it add the element to the array
// myArr.push(7)
//myArr.pop()  it generally removes the last element of the array

// myArr.unshift(9)  it adds the element in the zeroth index due to which e have shift all the values of index
// myArr.shift() it pop the zeroth index element

// console.log(myArr.includes(9)); it gives an bool output
// console.log(myArr.indexOf(3))   it gives the index of an element

// const newArr = myArr.join()   join convert the array element into string
// console.log(typeof(myArr));
// console.log(typeof(newArr));


// **slice,splice**

console.log("A",myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log( "B",myArr);

const myn2 = myArr.splice(1,3) //splice also manipukate the oriniginal array

console.log(" C",myArr);
console.log(myn2);

console.log(myArr);




