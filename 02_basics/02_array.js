const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);  we can access the array

console.log(marvel_heros.concat(dc_heros)[5]);
/* we can add two array into a single array .
const allHeros  = marvel_heros.concat(dc_heros)
console.log(allHeros);


/*spred method spread all the other arrays into a single element after that combine in a single array */
// const all_new_heros = [...marvel_heros,...dc_heros]

// console.log(all_new_heros);

const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity) //flat combine all the array ,depth is the input in flat fun.
console.log(real_another_array);

console.log(Array.isArray("mithilesh"));
console.log(Array.from("mithilesh")); //aan iterable object convert into array
console.log(Array.from({name: "mithilesh"})); // it gives empty array bcz it does not understand that which part converted into array


let score1= 100
let score2= 200
let score3= 300

console.log(Array.of(score1,score2,score3)); // it return set of array from a set of element.