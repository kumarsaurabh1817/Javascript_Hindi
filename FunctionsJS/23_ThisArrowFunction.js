// const user={
//     username:"Hitesh",
//     price:999,
//     welcomemessage:function(){
//         console.log(`${this.username} , welcome to website`);
//         // this yaha par current context ko refer karta hai
//         console.log(this)
//     }
// }

// user.welcomemessage()
// user.username="sam"
// user.welcomemessage()


// Yha par abhi ham node environment ke andar hai isliye yaha par ye refer krra ek empty object ko kyuki abhi global ke andar koi context hi nahi hai
// console.log(this)
// lekin jab yeahi cheez apan browser window par karenge toh apne toh waha par window ko refer karega kyuki window sabse jyada global object hai wo window object hai




// function chai(){
//     let username="Hitesh"
//     console.log(this.username) // ye line undefined print karegi
//     // yaani ye this context sirf object me hi chal rha hai function me mai isko nahi use kar paara hu  
// }
// chai()



// const chai=function(){
// //     let username="Hitesh"
// //     console.log(this.username) // ye line undefined print karegi
// //     // yaani ye this context sirf object me hi chal rha hai function me mai isko nahi use kar paara hu  
// }
// chai()




// const chai = () => {
//     let username="Hitesh"
//     console.log(this.username)
// }
// chai()


// const addtwo=(num1,num2) => {
    // curly braces use karea toh return keyword likhna padega 
//     return num1+num2;
// }


// const addtwo=(num1,num2) => num1+num2;
// const addtwo=(num1,num2) => (num1+num2); // parantehsis user kara toh return keyword likhne ke need nhi hai


// const addtwo=(num1,num2) => ({username:"hitesh"});
// object ko return karoge toh paranthesis lagana hi padega
// console.log(addtwo(3,4));


const myarray=[2,5,3,7,8]
// myarray.forEach(function(){})


























