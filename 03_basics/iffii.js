// it helped us to solve the pollution from global scope

(function chai()
{
console.log("iffi function")
})();


console.log("semicolo laga lena")

// arrow function and iffi
( (name) => {
    console.log(`arrow function also works ${name}`)
})("Bikash")
