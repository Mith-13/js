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

// Destrucure of object
const course = {
    coursename:"js in hindi",
    price: "999",
    courseInstructor :"hitesh"
}

const {courseInstructor}=course

console.log(courseInstructor);

const {courseInstructor:Instructor} =  course
console.log(Instructor);



// //it is not object .api are in json form and key and value both are string character
// {
//     "name": "hitesh",
//     "coursename":"js in hindi",
//     "price":"free"
// }
// Json is only javascript notation hai
// it is not necessary that api are in only object(with declaration) form it is also in array form which includes  other objects
[
    {},
    {},
    {}
]