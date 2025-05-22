const cooding=["bikash", "raman", "krish","binit", "ronak", "krishna"]

//inside is a call back fucntion so it don't have any name if you want to iterate just give a name of the iterator it will iterate over the array element by element

cooding.forEach( function (item){
    console.log(item)
} )


cooding.forEach( (val) => {
    console.log(val)
} )


function printme(item)
{
    console.log(item)
}

//don't execute the function just give the reference of the function inside the call back function

cooding.forEach(printme)




const coding = ["js", "ruby", "java", "python", "cpp"]

//it can't return values in this manner
// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);

//fillter can return values 

const Mynums=[2,4,6,7,8,9,10,13,17]

// const values= Mynums.filter((num)=> num>6)
// console.log(values)

const values= Mynums.filter((num)=>
     {
        //in this case return should be written explicitrly as we have declared it inside the curly bracket
        return num>6
    })
console.log(values)


