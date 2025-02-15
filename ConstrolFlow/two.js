// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


const month=2;
switch(month){
    case 1:
        console.log("januanry");
        break;
    case 2:
        console.log("feb");
        // break;
        // agar break nahi use karoge toh iske neeche ka saara code execute hoga untill it encounters a new break statement or it reached default case 
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    default:
        console.log("default case matched");
        break;
}


// nullish coalescing operator ( ?? ) : null undefined
let val1;
// val1=5 ?? 10;
// null ya undefined ayi toh 10 print kardo
// val1=null ?? 10; 
// val1=undefined ?? 15;
// val1=null ?? 10 ?? 12;

console.log(val1);



// ternary operator 
// condition ? true : false;

const iceteaprice=100;
iceteaprice >= 80 ? console.log("less than 80") : console.log("gretaer tthan");

