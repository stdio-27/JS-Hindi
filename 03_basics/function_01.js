function cart_addons(...num1){
    return num1;
}

console.log(cart_addons(200, 500, 400));

function budget(nums1, nums2, ...num1)
{
return num1;
}

console.log(budget(100,200, 300, 400, 500, 600))

 const user={
username: "Bikash",
price: 6969
 }
function handle_object(anyobject)
{
console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handle_object(user)

const mynewarray=[1,2,3,4,5,6,7,8,9,10]

function handlle_func(getarray)
{
    console.log(`the second element of the array is ${getarray[1]}`)
}

handlle_func(mynewarray)