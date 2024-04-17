// #primitive

// 7 types:String,Number,Boolean,null,undefined,symbol,bigint
// all the primitive data type are call by value.all the changes a re done in copied data not in original data
// null means empty,ekdum khali
// symbol  is used to make something unique


const score = 100
const scoreValue =100.3

const isLoggedIn=false
const outsideTemp = null
let userEmail;

const id=Symbol('123')
const anotherId =Symbol('123')

console.log(id===anotherId);

const bigNumber=33565434654465n

// reference(Non primitive)
//Array,objects,functions


// array
const heros=["shaktiman","naagraj","doga"];

// objects

let myObj = {
    name:"mithilesh",
    age:22,
}

// functions
const my Function = myFunction(){
    console.log("Hello World");
}

console.log(typeof(bigNumber));