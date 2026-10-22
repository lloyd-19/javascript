const details={                                       //printing object and function using this
    username:"Rahul",
    price:450,



welcomeMessage:function (){
    console.log( `The user name is ${this.username},Price is ${this.price}`)
    console.log(this);                     // you can get to know the current context and if updated that context also

}
}
details.welcomeMessage()
details.username="sam"                   //the conetxt can be changed     
details.welcomeMessage()

//Arrow 
function bucket(){
    let username="rahul"                 
    console.log(this);                     // here we cannot use this.username i.e we cannot access or print here in function unlike object

}
bucket()

const addTWo=(num1,num2)=>{      //first case
    return num1+num2

}
console.log(addTWo(3,4));

const sumTWo=(num1,num2)=> (num1+num2)    // second case
console.log(sumTWo(3,4));





