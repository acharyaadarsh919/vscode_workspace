// PI
console.log(Math.PI);
// trunc
console.log(Math.trunc(22.82873));
// round
console.log(Math.round(22.12873));
// ceil
console.log(Math.ceil(22.12873));
// floor
console.log(Math.floor(22.92873));
// pow
console.log(Math.pow(2,3));
// min and max
console.log(Math.min(2,3,7 , 10, 1));
console.log(Math.max(2,3,7 , 10, 1));
// random
console.log(Math.random());
console.log(Math.random());
// generating no from 1 to 10
console.log(Math.floor(Math.random() * 1000) + 1); /*why + 1 ?? --> because random function may generate something like 0.00123  which * 10 and reducing it to floor will make it as 0 , but we need from 1 so ...*/