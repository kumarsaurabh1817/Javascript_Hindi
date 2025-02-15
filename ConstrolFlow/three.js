// truthy and falsi values in js

// falsy values are values which can be assumed false
// false , 0 , -0 , BigInt 0n, "" , null , undefined ,  NaN 

// truthy values 
// "0" , 'false' , " " , [] , {} , function(){} - empty function is also a truthy vlaue

const useremail=[]
const usernames={}
if(useremail.length === 0){
    console.log("array is empty")
}
if(Object.keys(usernames).length === 0){
    console.log("object is empty")
}