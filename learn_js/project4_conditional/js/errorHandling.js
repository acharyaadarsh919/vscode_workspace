// using stict mode so that it follows the rules that we have learnt.

"use strict";

//  variable = "adarsh";
const variable = "adarsh";

console.log(variable);

// typeerror

// variable = "goodsay";
// console.log(variable);

// TRY - CATCH block

const makeError = () => {
    try {
        variable = "goodsay";
    } catch (error) {
        console.log(error);
        console.error(error);
        console.warn(error);
        console.table(error);
        console.error(error.name);
        console.error(error.message);
        console.error(error.stack);
    }
};

makeError();

// custom error
const makeErrorCustom = () => {
    try {
        throw new customError("This is a custom error");
        // throw new Error("This is a generic error");
    } catch (error) {
        console.error(error.stack);
    }
};

makeErrorCustom();

function customError(message){
    this.message = message;
    this.name = "Custom Error";
    this.stack = `${this.name} : ${this.message}`;
}

// finally

let i = 1;
while(i <= 5){
    try{
        if(i % 2 !== 0){
            throw new Error("Odd number");
        }
        console.log("even number")
    }catch(err){
        console.error(err.stack);
    }
    finally{
        console.log("in finally");
        i++;
    }
}