//object literals
//onject declaration
const mySym=Symbol("keyl")

const Jsuser={                               //key:value
        name:"rahul",
        [mySym]:"myKey1",
        age:30,
        location:"jaipur",
        email:"rahul@google.com",
        isLoggedIn:false,
        lastLoginDays:["monday","Tuesday"]

}
console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser[mySym]);

Jsuser.email="hello@google.com"
Object.freeze(Jsuser)                //cannot be changed
Jsuser.email="kkk@google.com"
console.log(Jsuser);

