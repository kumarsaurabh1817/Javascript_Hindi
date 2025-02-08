// singleton
// Object.create



// object literal

const mysym=Symbol("key1")
const jsuser={
    name:"Hitesh",
    "Full Name":"Saurabh Kumar",
    age:18,
    // symbols ko as a key aise hi likhenge
    [mysym]:"mykey1",
    // [mysym]:"mykey1",
    location:"Jaipur",
    email:"hitesh@google.com",
    isloggedin:false,
    lastlogindays:["Monday","saturday"]
}
// console.log(jsuser.email)
// console.log(jsuser["Full Name"])
// console.log(typeof jsuser.mysym)
// console.log(typeof jsuser[mysym])



jsuser.email="kumarsaurabh1817@gmail.com"
// freeze the changes iske baad koi changes nahi honge
// Object.freeze(jsuser) 
jsuser.email="harekrishna@gmail.com"
// console.log(jsuser)


jsuser.greeting=function(){
    console.log("Hare krishna JS User");
}
jsuser.greetingtwo=function(){
    console.log(`Hare krishna JS User , ${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());

