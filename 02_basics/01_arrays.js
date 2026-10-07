const myArr=[0,1,2,3,4,5]

const myArr2=new Array(1,2,3,4,5)

// console.log(myArr);
// console.log(myArr2);

//methods
myArr.push(6)
myArr.push(7)
myArr.pop();
myArr.unshift(9);
myArr.shift();
console.log(myArr);
console.log(myArr.includes(3));
console.log(myArr.includes(9));
console.log(myArr.indexOf(6));

//slice
console.log(myArr);

const myn1=myArr.slice(1,3)
console.log(myn1);

//splice
console.log(myArr);

const myn2=myArr.splice(1,3)
console.log(myArr);
console.log(myn2);




