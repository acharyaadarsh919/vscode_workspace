const myobj = {
    myName : "adarsh" ,
    hobbies : ["eat" , "sleep" , "code"],
    hello : function (){
        console.log("Hello");
    }
}

console.log(myobj);
console.log(myobj.myName);
myobj.hello()
console.log(typeof myobj);

// JSON.stringify converts object to string
const sendJSON = JSON.stringify(myobj);

console.log(sendJSON);
console.log(typeof sendJSON);

// functions are not sent by JSON,
// i.e fuctions sent through json are lost

// JSON.parse converts the recieved string back to object
const recieveJSON = JSON.parse(sendJSON);

console.log(recieveJSON);
console.log(typeof recieveJSON);
