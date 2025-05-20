// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    //this is the actual way to add any kind of symbols in an object otherwise the type of that object wil be stored as string 
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//there are two diffrnet methods to acces objects

// console.log(JsUser.email)
// console.log(JsUser["email"])

//can't access full name using dot as it is defined as a string 
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"

// after freezing no more modification will be allowed in the object

// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

//normal fucntion 
JsUser.greeting = function(){
    console.log("Hello JS user");
}

// function using litterals

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());