//  NEsted scope

// function one(){
//     const username="hitesh";
//     function two(){
//         const website="youtube";
//         console.log(username);
//     }
    // console.log(website); 
//     // two();
// }
// one();

// if(true){
//     const username="hitesh";
//     if(username === "hitesh"){
//         const website=" youtube"
//         console.log(username + website);
//     }
//     // console.log(website);
// }
// console.log(username);





/* INTERESTING  */
// main crux ye hai ki jab function aise declrea karte hai toh addone function even before declration bhi access kar skte hai and koi error nhi aayega
addone(5);
function addone(num){
    return num+1;
}
addone(5);


// jab function ko aise declare karte hai toh , function declaration se pehle access nhio hota
addtwo(5);
const addtwo=function(num){
    return num+2;
}

