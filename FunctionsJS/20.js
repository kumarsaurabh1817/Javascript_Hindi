// function calculatecartprice(...Number1){
//     return Number1;
// }
function calculatecartprice(val1,val2,...Number1){
    // ... ye yaha par rest operator ki tarah work karega and jiske bhi liye rest oerpator laga hoga wo usse lekar saare values ko le lega apne aaap and ek aarray bna dega
    return Number1;
}
// console.log(calculatecartprice(5,10,15,13));



const user={
    username:"Hitesh",
    price:199
}

function HandleObjects_InFunctions(anyobject){
    console.log(`username is ${user.username} and price tag is ${anyobject.price}`);
}
// HandleObjects_InFunctions(user)


const Marks=[200,400,100,600]
function GiveSecondValue(Getarray){
    return Getarray[1];
}
// console.log(GiveSecondValue(Marks))
console.log(GiveSecondValue([200,400,100,600]))

































