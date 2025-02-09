// arrays declration
const myarr=[0,1,2,3,4,5]
// const myheroes=["shaktimann","Naagraj"]
// const newarray=new Array(10,2,0,4,41)
// all three are correct declaration of the arrays
// console.log(myarr)

// arrays methods
// myarr.push(6);
// myarr.push(7);
// console.log(myarr)
// myarr.pop();


// myarr.unshift(0)
// myarr.unshift(9) 
// unshift will push in the start of array
// myarr.shift(9) 
// shift will pop from the start of array
// console.log(myarr.includes(9)) // check whether the value is present in the array or not, and return true or false respectivelyu
// console.log(myarr.includes(1))

// indexof gives the index of the element , if does not exists then it returns a -1

// console.log(myarr.indexOf(2222))
// const newarr= myarr.join() /// this gives string
// console.log(typeof myarr); // this is array
// console.log(typeof newarr); // this is string





// slice and splice
const IndianFruits=["Orange","Banana","Apple","Mango","Kiwi","Guava","Watermelon"];
// const NewFruits=IndianFruits.slice(1,4);
// slice returns a section of the array from 1 to index just lesser than 4
// but it does not modify the original arrays


const NewFruits=IndianFruits.splice(1,4);
// splice returns a section of the array from 1 to index equal to 4
// but it does also  modify the original arrays
console.log(IndianFruits);
console.log(NewFruits);
