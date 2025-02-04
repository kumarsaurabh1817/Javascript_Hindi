// Dates in JS
/*
let mydate=new Date()
console.log(typeof mydate)
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleDateString())
console.log(mydate.toLocaleString())
console.log(mydate.toTimeString())
console.log(mydate.toISOString())
console.log(mydate.toUTCString())
*/


// Creating own specific dates in JS
// let mycreatedate=new Date(2025,0,23);
// let mycreatedate=new Date(2025,0,23,5,3);
// console.log(mycreatedate)
// let mycreatedate=new Date("2025-01-14"); 
// other countries syntax
// syntax in Bharat
// let mycreatedate=new Date("01-21-2002");  
// console.log(mycreatedate.toLocaleString())


/* this is miliseconds value from 1 jan 1970 to current date*/
// let mytimestamp=Date.now() 
// console.log(mytimestamp); 
// console.log(mycreatedate.getTime()); 
// this is going to give me miliseconds value by doing so we can easily compare the timestamp and mycreateddate easily


// to get the time in seconds we divided date.now() by 1000 and to remove decimals we took the math.floor value of it
// console.log(Math.floor(Date.now() / 1000))




// let newdate=new Date()
// console.log(newdate.getDay());
// console.log(newdate.getMonth()+1);
// console.log(newdate.getFullYear());
// console.log(newdate.getMinutes());

newdate.toLocaleString('default',{
    weekday:"long"
})