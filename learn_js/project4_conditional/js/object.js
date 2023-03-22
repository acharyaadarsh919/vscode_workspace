// Objects

const myObj = {
    myName : "dave" ,
    alive : true , 
    age : 42 ,
    hobbies : ["eat" , "sleep" , "code"],
    beverages : {
        morning : "coffee",
        afternoon : "iced coffee"
    },
    func : function say(){
        return `time for ${this.beverages.morning}`;
    }
};

console.log(myObj);
console.log(myObj.alive);
console.log(myObj.age);
console.log(myObj.hobbies);
console.log(myObj.hobbies[1]);
console.log(myObj.beverage);
console.log(myObj.beverages.morning);
console.log(myObj["beverages"].morning);
console.log(myObj["hobbies"][2]);
console.log(myObj.func());

// Inheritance

console.log("here on OBJECT INHERITANCE ");

const vehicle = {
    wheels : 4 ,
    engine : () => {
        return "Vroooooom !!!"
    }
}

const truck = Object.create(vehicle);
truck.door = 2
console.log(truck);
truck.wheels = 6;
truck.engine = () =>{
    return "Broooom !!!"
}

console.log(truck.engine());

// object.keys and object.values

const band = {
    vocal : "ramesh",
    guitar : "suresh",
    bass : "harry",
    drums : "viksstar"
}

console.log(band);
console.log(Object.keys(band));
console.log(Object.values(band));

// for - in loop

for( let job in band){
    console.log(`the person on ${job} is ${band[job]}`);
}

// deleting from obect

delete band.drums;
console.log(band);

// checking property using .hasOwnProperty()

console.log(band.hasOwnProperty("drums"));

//  ||  DESTRUCTURING   ||

const {guitar : myVariable , bass : mybass} = band;
console.log(myVariable);
console.log(mybass);

// or if variable name is same as keys

const {guitar , bass , vocal} = band;
console.log(bass);
console.log(vocal);

// or if using in fuction

function Sing({vocal}){
    return `${vocal} Sings!`;
}

console.log(Sing(band));