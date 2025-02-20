// const coding=["js","ruby","java","python","cpp"];
// const values=coding.forEach((item)=> {
//     console.log(item);
//     return item;
// })

// console.log(values);


const mynums=[1,2,3,4,5,6,7,8,9,10];
// const newnums=mynums.filter( (num) => num > 4 )
// const newnums=mynums.filter( (num) => {
//     // agar scope {} lagaya hai toh return keyword use karna padega
//     // lekin agar () use kara hota toh khud hi return ho jata
//     return num > 4;
// })

const newnums=[];
mynums.forEach( (num) => {
    if(num > 4){
        newnums.push(num);
    }
} )

console.log(newnums);














