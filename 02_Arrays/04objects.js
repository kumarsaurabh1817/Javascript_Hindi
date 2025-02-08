// const tinderuser=new Object() // ye ek singleton object hai
const tinderuser={} //ye ek non singleton object hai
tinderuser.id="123abc"
tinderuser.name="sammy"
tinderuser.isloggedin=false
// console.log(tinderuser)

const regularuser={
    email:"kumarsaurabh1817@gmail.com",
    fullname:{
        userfullname:{
            fistname:"Saurabh",
            lastname:"Kumar"
        }
    }
}
// console.log(regularuser.fullname.userfullname)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
// console.log(obj3)






// console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty('isloggedin'))
