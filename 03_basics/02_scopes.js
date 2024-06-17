var c=300  // it also gives value c= 30;
let a=50;

// it does not work as block scope
if(true){
    let a= 10;
const b=20;
var c=30;
console.log("inner: ",a);
}
console.log(a);
// console.log(b);
// console.log(c);  it is the main problem bcz it does not follow any scope 