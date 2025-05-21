function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

//sam is the default Value so that it never shows undefined 
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

const addtwo =function(nums)
{
return nums+2
}

console.log(addtwo(5))


// differnce between declartaion of function and its access/scopes

//accesed before declartion
console.log(addone(5))

function addone(num){
    return num + 1
}


//can't access before declartion
addTwo(5)
const addTwo = function(num){
    return num + 2
}