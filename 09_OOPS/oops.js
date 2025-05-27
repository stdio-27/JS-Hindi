const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }
//it returns by default if we don't return then there is no issues
    return this
}
//if we don't use the new keyword here  while declaring user it will over write the value of user one to avoid this we use New so we can get a new instance(constructor Function)
const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)

//New key word 
//1. emtpy object {} known as instance
//2. constructor fucntion 
console.log(userOne.constructor);
//console.log(userTwo);