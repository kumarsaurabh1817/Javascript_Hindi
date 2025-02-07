const marvelheros=["thor","spiderman","ironman"]
const dcheros=["superman","flash","batman"]
// marvelheros.push(dcheros) 
// ye second array ko hi as an element insert kar lega apne andar
// console.log(marvelheros);
// console.log(marvelheros[3][1]);

// concat merges two arrays and return a new array without modyfing the original given array
// const newarray=marvelheros.concat(dcheros)
// console.log(newarray);



const all_new_heroes=[...marvelheros,...dcheros]
// console.log(all_new_heroes);


const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)
// console.log(real_another_array);


// check whether is is array or not and return true or false;
console.log(Array.isArray("Hitesh")) 

// convert to array
console.log(Array.from("Hitesh")) 
console.log(Array.from({name:"Hitesh"})) // interesting case here we need to tell explicity kis ko lekar aray bnaye value se ya pair se



let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));


