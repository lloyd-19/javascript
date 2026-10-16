const tinderUser={}   //object created
tinderUser.name="Rhaul"
tinderUser.email="gg@gmail.com"
tinderUser.id=234

// console.log(tinderUser.name);

const instaUser={

isLogged:false,
fullname:{
    name:"rahul",
    surname:"gandhi"
}
}
console.log(instaUser);
instaUser.id=343

const obj3={...tinderUser,...instaUser}

// console.log(obj3);

