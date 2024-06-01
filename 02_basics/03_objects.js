// There are two ways to declare object  .one is literal and other is constructor.
// singleton => if we define as literal then it is not a singleton
// constructor => it always makes a singleton object


//   object literals

// Object.create it makes object through constructor

// const JsUser = {}   empty object

// object always contain data in key value pair. as a default key always a string


const mySym = Symbol("key1")  //symbol declaration 

//Use  of symbol in object  it is use and access under square bracket

const JsUser ={
    name: "Mithilesh",
    "full name": "Mithilesh kumar verma",
    age: 18,
    [mySym] : "mykey1",  //use as asymbol
    location: 'Jaiur',
    email: "mith12@gmail.com",
    isLoggedIn: false,
    LastLoginDays : ["MONDAY","SATURDAY"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]);   here we have to take key value as a string
// console.log(JsUser.full name);  it gives error because key taken as string so we cant use with (.)
// console.log(JsUser["full name"]);
// console.log(JsUser.mySym); 
// console.log(JsUser[mySym])

// JsUser.email = "mith@chat.com"
// Object.freeze(JsUser)
// console.log(JsUser);
// JsUser.email = "mith@mr.com"
// console.log(JsUser);

JsUser.greeting = function()
{
    console.log("Hello Js User");
}
console.log(JsUser.greeting());

// if double quotation is changed to backtick then it is called as string interpolation



JsUser.greetingTwo = function()
{
    console.log(`Hello Js User,${this.name}`);
}
console.log(JsUser.greetingTwo());
