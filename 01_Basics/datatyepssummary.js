// Primitive datatypes are 7 and they are call by value , they are always created for the copy
// string , number, boolean , null , undefined , symbol , BigInt



/*
Notes - Javascript is a dynamically typed language. This means that the type of a variable is checked during runtime, as opposed to compile time. In dynamically typed languages, you do not need to explicitly declare the data type of a variable; the interpreter infers the type based on the assigned value. This allows a variable to hold values of different types during its lifetime.
*/

const score=100
const scorevalue=100.3

const isLoggedin=false
const outTemp=null
// let useremail=undefined; 
// even if we give undefined to varaible or do not give any thing , it is by default undefined in the javascript
// let userEmail=;


// const id=Symbol('123')
// const anotherid=Symbol('123')
// console.log(id===anotherid);

// reference types also called Non Primitive datatypes
// arrays , objects , functions , 

const heroes=["shaktimann","joy","natti"]
let myobj={
    name:"saurabh",
    age:22,

}

const myfunction=function(){
    console.log("Hello Saurabh Kumar Ji");
}
console.log(typeof myfunction)

console.log(typeof heroes)
console.log(typeof myobj)



/*
Primitive DataTypes:


1.Number: Represents both integer and floating-point numbers. Example: 5, 3.14.
 
2.String: Represents a sequence of characters enclosed in single or double quotes. Example: "Hello, world!".

3,Boolean: Represents a binary value, either true or false, often used for conditional logic.

4.Undefined: Represents a variable that has been declared but hasn't been assigned a value yet. Example: let x;.

5.Null:  standalone value it is represenataion of empty value it is special type and it is a object type. Example: let y = null; 

6.Symbol (ES6): it is mostly used used to find uniqnece.

7.BigInt (ES11): Represents large integers that cannot be represented by the Number type.

 Refence (Object Data Types):

1.Object: Represents a collection of key-value pairs (properties and methods). Example: { name: "John", age: 30 }.

2.Array: Represents a list-like collection of values, indexed by numbers (integer indices). Example: [1, 2, 3, 4].

3.Function: Represents a reusable block of code that can be invoked or called with arguments. Example: function add(x, y) { return x + y; }.

4.Date: Represents dates and times.

5.RegExp: Represents regular expressions for pattern matching.



lets talk about some Range of Primitive DataType:

    1.Number:
        Represents both integers and floating-point numbers.
        Typical Range: -9,007,199,254,740,992 (-2^53) to 9,007,199,254,740,992 (2^53) inclusive.
        Smallest Increment: 2^(-52).

    2.String:
        Represents a sequence of characters.
        No specific range limit, but practical limits depend on memory and system resources.

    3.Boolean:
        Represents true or false.
        Only two possible values: true and false.

    4.Undefined:
        Represents a variable that has been declared but hasn't been assigned a value.
        It has only one possible value: undefined.

    5.Null:
        Represents the intentional absence of any object or value.
        It has only one possible value: null.

    6.Symbol (ES6):
        Represents a unique and immutable value.
        No specific range limit.

    7.BigInt (ES11):
        Represents large integers that cannot be represented by the Number type.
        The range is practically unlimited and depends on available memory.
*/


