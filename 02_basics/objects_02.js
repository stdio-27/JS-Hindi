const tinderuser = new Object()

tinderuser.id="mavericks09"
tinderuser.name="Bikash"
tinderuser.loggedin=false
console.log(tinderuser)

const regularuser= {
    email: "biksh2003@gmail.com",
    fullname: {
        userfullname: {
firstname: "Bikash",
    lastname: "Bhattacharjee"
        }
    }
}

//console.log(regularuser.fullname.userfullname)

const obj1= {1: "a", 2: "b"}
const obj2 ={ 3: "c", 4:"d"}

//if we dont put that empty object than that empty object will be taken as target and other objects will go inside that
const obj3=Object.assign({}, obj1, obj2)

//spreading taechnique and most used technique
const obj4={...obj1, ...obj2}
console.log(obj3)
console.log(obj1)


//all the results are stored in array data type thast important as we can acces them easily now 
console.log(Objects.keys(tinderuser));console.log(Objects.values(tinderuser));
console.log(Objects.entries(tinderuser));
//you can check wheather a property belong to an obejct or not
console.log(tinderuser.hasOwnProperty('loggedin'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

//it is oBject Destructuring used to acces objects easily
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]


