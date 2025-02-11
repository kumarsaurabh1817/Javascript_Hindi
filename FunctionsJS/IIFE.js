// Immediately invoked functions Expression (IIFE)
(function chai(){
    console.log("DB Connected");
})(); 
// ab ye upar waala function IIFE toh hogya hai lekin isko pta nhi hai ki control rokna kaha hai isliye yaha par semicolon lagana must hai anivarya hai
// global scope ke pollution se porblem hoti hai kai baar toh uske jo bhi vairables hai unhe hatane ke liye yeh use kara jaata ahi for IIFE
// IIFE ke liye function ko hi () me daldo and execution ke liye last me ek or () daal de


(function aurcode (){
    console.log(`DB Connected Again`)
})();


( (name) => {
    console.log(`DB Connected tow ${name}`)
})('Hitesh');




