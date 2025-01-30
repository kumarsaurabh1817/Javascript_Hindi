const accountId=144553
let accountEmail="kumarsaurabh1817@gmail.com"
var accountPassword="12345"

/* In js we can declare a variable even without using let and var but this is not good practice try to avoid it */
accountCity="Jaipur"

/* if we only declare a variable in js but do not give any value to it , then js takes it as undefined*/
let accountState;

/* items declared using const keyword cannot be changed later on */
// accountId=3

accountEmail="kumarsaurabh1640@gmail.com"
accountPassword="212121"
accountCity="delhi"
// console.log(accountId);

/*
    Prefer not to use var because of issue in block and functional scopes always use const and let only 
*/

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])