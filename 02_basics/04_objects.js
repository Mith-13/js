// const tinderUser = new Object()  it is singleton object

const tinderUser ={} //it is non- singleton object

tinderUser.id = "123abc"
tinderUser.name= "darren"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
             firstname:"mithilesh",
             lastname:"verma"
        }
    }
}
console.log(regularUser);
console.log(regularUser.fullname.userfullname); //for the access of the element

const obj1 ={ 1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = Object.assign({},obj1,obj2)
// const obj3 = {obj1,obj2}
// console.log(obj3);

const obj3={...obj1,...obj2} //with the help of spread method
console.log(obj3);

const Users = [{
    id : 1,
    email: "H@gmail.com"
},
{
    name: "mith",
    no: 45343
}
]
// console.log(Users[1].email)
console.log(tinderUser);

/**** important   console.log(Object.keys(tinderUser)); //it gives keys in the form of array******/
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));