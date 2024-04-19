// Dates
let myDate = new Date()
//console.log(myDate); //it gives date as output

// console.log(myDate.toString()); //convert date into string
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString()); //general way to print date format
// console.log(myDate.toDateString()); //day with date format
// console.log(myDate.toLocaleString()); // general way with date and time
// console.log(typeof(myDate)); // interview related que

/*declaration of date */
// let myCreatedDate = new Date(2023,0,23,2,3) // month start from 0
let myCreatedDate1 = new Date("01-14-2023")
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate1.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate1.getTime());
// console.log(Math.floor(Date.now()/1000)); //i it gives current 


 let newDate = new Date()
// console.log(newDate.toLocaleDateString());
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

//`${newDate.getDay()}and the time`

console.log(newDate.toLocaleString('default',{weekday: "long"}))