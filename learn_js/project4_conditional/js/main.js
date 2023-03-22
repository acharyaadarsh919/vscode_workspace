// if statement
let soup = "chicken noodle soup";
let reply;

if(soup){
    if(true){
        soup = `${soup} hot`;
    }
reply = 
`here's your order of 
${soup}`; 
}
else{
    reply = "we are out of soup";
}

console.log(reply);

// switch statement

switch("2"){
    case "1": console.log("1");
                break;
    case "2": console.log("2");
                break;
    case "3": console.log("3");
                break;
    default : console.log("no match");
}

// ternary operator

let response = soup ? 'yes we have soup': 'no soup for you';
console.log(response);