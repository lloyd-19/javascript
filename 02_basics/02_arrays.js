//concatenation
const marvel_heros=["ironmam","spiderman","thor"]
const dc_heros=["batman","superman"]

const all_heros=marvel_heros.concat(dc_heros)
console.log(all_heros);

const all_new_heros=[...marvel_heros,...dc_heros] //spread method
console.log(all_new_heros);

const another_array=[1,2,3,[4,5,6],7,[8,[9,10],11]]
const real_another_array=another_array.flat(Infinity) 

console.log(real_another_array);

