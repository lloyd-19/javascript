function userName(){
    console.log("Rahul");                 //function declaration and how to print
}
userName()

function addTwoNumbers(number1,number2){         //add 2 no.s using function
    let result=(number1+number2)
    return result
}
const result= addTwoNumbers(3,5)
console.log("Result is:",result);

function myCartCal(num1){              //only value gets printed
    return num1

}
console.log(myCartCal(200,300,400,500));

function myCartCal(...num1){              //rest/spread operator
    return num1

}
console.log(myCartCal(200,300,400,500));

const user={                                     //object and function 
    name:"rahul",
    price:330

}
function userInfo(anyObject){
    console.log(`Name is ${anyObject.name} and Price is ${anyObject.price}`)

}
userInfo(user)

