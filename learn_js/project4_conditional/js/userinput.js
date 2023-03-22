// user input

// || POP UPS
// alert
alert("welcome");

// confirm
let value= confirm('click ok for true\nClick cancel to cancel');

console.log(value);

// prompt
let name1 = prompt('enter your name')
console.log(name1 ?? "please enter name");

if( name1){
    console.log("name");
} else{
    console.log("enter your name");
}