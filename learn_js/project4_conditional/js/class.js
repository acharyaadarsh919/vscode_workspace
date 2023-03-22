class pizza{
    constructor(pizzatype){
        this.type = pizzatype;
        this.size = "medium";
        this.crust = "original";
    }

    get pizzacrust(){
        return this.crust;
    }

    set pizzacrust(pizzacrust){
        this.crust = pizzacrust;
    }
    
    bake(){
        console.log(`Baking a ${this.size} ${this.crust} ${this.type} crust pizza.`)
    }
}

const myPizza = new pizza("pepperoni");
myPizza.pizzacrust ="sausage";
myPizza.bake();

console.log(myPizza.pizzacrust);

console.log('factory function example');

//  || FACTORY FUNCTION

function pizzaFactory(pizzaSize){
    const crust1 = "original";
    const size1 = pizzaSize;

    return {
        bake : () => console.log(`Baking a ${size1} ${crust1} crust pizza`)
    };
}

const mypizza1 = pizzaFactory("small");
mypizza1.bake();

console.log('class with private fields');

//  || Class with private and public field
class pizza123{
    crust123 = "original";
    #sause123 = "traditional";
    #size123;
    constructor(pizzasize123){
        this.#size123 = pizzasize123;
    }

    getCrust(){
        return this.crust;
    }

    setCrust(pizzaCrust){
        this.crust = pizzaCrust;
    }
    
    hereYouGo(){
        console.log(`Baking a ${this.crust} ${this.#sause123} ${this.#size123} pizza.`)
    }
}

const myPizza123 = new pizza123("Large");
myPizza123.setCrust("extra cheese");
myPizza123.hereYouGo();
console.log(myPizza123.crust);
// console.log(myPizza123.#size123);
