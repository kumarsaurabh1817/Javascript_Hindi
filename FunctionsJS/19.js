/*
function SayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
*/
/*
// Agar without paranthesis ke functions name likha hai toh woh sirf function ka reference hota hai
    SayMyName
// Agar with paranthesis ke functions name likha hai toh woh function ka execution hota hai
    SayMyName()
    */
// SayMyName()


// function AddTwoNumbers(Number1,Number2){
//     console.log(Number1+Number2);
// }
/*
AddTwoNumbers(3,8)
AddTwoNumbers(3,"8")
AddTwoNumbers(3,"a")
AddTwoNumbers(3,"null")
AddTwoNumbers(3,null)
*/
// const answer=AddTwoNumbers(3,5)
// console.log("answer : " ,answer);

/*
function AddTwoNumbers(Number1,Number2){
    // console.log(Number1+Number2);
    // let result=Number1+Number2;
    // return result;
    return Number1+Number2;
}

const result=AddTwoNumbers(3,5)
console.log("result : " ,result);
*/



function loginusermessage(username){
    // if(username === undefined){
    if(!username){
        console.log("Please enter valid username");
        return;
    }
    return `${username} just logged in`
}
// console.log(loginusermessage("Saurabh"))
// console.log(loginusermessage(""))
console.log(loginusermessage())







































