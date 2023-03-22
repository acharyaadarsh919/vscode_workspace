const myArray = [];

//  push 
myArray.push(42);
myArray.push("adarsh");
myArray.push(1);
// push returns length of the array
const pushLength = myArray.push(false);

console.log(pushLength);
console.log(myArray);

// unshift() and it returns length
const unshiftLength = myArray.unshift("first")

console.log(unshiftLength);
console.log(myArray);

// pop removes element from end and it returns poped item
const popElement = myArray.pop();

console.log(popElement);
console.log(myArray);

// shift removes from front and it returns removed item
const shifrElement = myArray.shift();

console.log(shifrElement);
console.log(myArray);

// delete
// NOT A GOOD WAY
// delete myArray[2];
// console.log(myArray);

// SPLICE is used to remove elements from middle and replace dif value from the pos specified
myArray.splice(1 , 1 , 42 , 32 , 322);

console.log(myArray);

// slice 
const newArray = myArray.slice(2);

console.log(newArray);

// reverse
const reverseArray =  myArray.reverse();

console.log(reverseArray);
console.log(myArray);

// join
const newString = myArray.join();

console.log(newString);

// concat 2 arrays
const array1 = ["a" , "b" , "c"];
const array2 = ["d" , "e" , "f"];

const array3 = array1.concat(array2);

console.log(array3);

// using SPREAD operator to concatinate

const array4 = [...array1 , ...array2];

console.log(array4);

// multi dimensional array
const equipShelfA = ["baseball" , "football" , "cricketball"];
const equipShelfB = ["basketball" , "golf ball" , "volleyball"];

const clothesShelfA= ["tank tops" , "t-shirts" , "jerseys"];
const clothesShelfB = ["joggers" , "jeans" , "hoodies"];

const equipShelf = [equipShelfA , equipShelfB];
const clothesShelf = [clothesShelfA, clothesShelfB];

console.log(equipShelf[0][1]);

