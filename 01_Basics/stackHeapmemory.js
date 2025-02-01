// stacks memory used for primitive data types - it gives the copy of the varible
// and heaps usef for refernced data types - it gives the orignal refernce to the variable
/*

let myyoutubename="hiteshchaudharydotcom"
let anothername=myyoutubename
anothername="chaiaurcode"
console.log(myyoutubename);
console.log(anothername);

*/

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}
// created in heap so changed to the original refernced
let userTwo=userOne
userTwo.email="saurabhkumar"
console.log(userOne);
console.log(userTwo);


