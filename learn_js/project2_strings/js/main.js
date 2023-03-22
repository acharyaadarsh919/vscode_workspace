const myVariable = "mathematics";

// length
console.log(myVariable.length);
console.log("Hi I am Adarsh".length)

// charAt
console.log(myVariable.charAt(0));

// indexof  gives index of 1st occurance || if not found -1
console.log(myVariable.indexOf("mat"));
console.log(myVariable.indexOf("dmat"));

// lastindexof
console.log(myVariable.lastIndexOf("at"));

// slice
console.log(myVariable.slice(5,8));
console.log(myVariable.slice(5));
console.log(myVariable.slice(5,2));
console.log(myVariable.slice(5,5));

// touppercase  and tolowercase
console.log(myVariable.toUpperCase());
console.log(myVariable.toLowerCase());

// includes
console.log(myVariable.includes("dat"));
console.log(myVariable.includes("at"));

// split
console.log(myVariable.split("e"));
console.log(myVariable.split(""));
console.log(myVariable.split(","));
console.log("every boy is an alpha?".split(" "));

// there are many more methods in string.