const myInteger = 42;
const myFloat = 42.01523;
const myString = "42";

console.log(myInteger === myFloat);
console.log(myInteger === myString);
console.log(myString + 3);

// Number  is used to conver the value , if its convertable
console.log(Number(myString) + 3);

// if number is non convertable it returns NAN (not a number)
console.log(Number("adarsh"));
console.log(Number(undefined));
console.log(Number(true));
console.log(Number(false));

// Number.isInteger
console.log(Number.isInteger(myInteger));
console.log(Number.isInteger(myFloat));
console.log(Number.isInteger(myString));

// Number.parseFloat
console.log(Number.parseFloat(myString));
console.log(Number.parseFloat(myFloat));
console.log(Number.parseFloat(myInteger));
console.log(Number.parseFloat("nu22ju4"));
console.log(Number.parseFloat("2.0134jde3"));

// Number.toFixed
console.log(Number.parseFloat("2.0134jde3").toFixed(2));
console.log(myFloat.toFixed(2));

// Number.parseInt
console.log(Number.parseInt("12.34dui"));

// tostring
console.log(typeof myFloat.toString());

// isNan  
console.log(Number.isNaN("adarsh"));
console.log(Number.isNaN(myFloat));

// global isNan
console.log(isNaN(NaN));
console.log(isNaN("dave"));

