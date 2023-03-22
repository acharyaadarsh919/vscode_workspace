var x = 1;
let y = 2;
const z = 3;

    console.log(`global : ${x}`);
    console.log(`global : ${y}`);
    console.log(`global : ${z}`);

    {
        var x = 123;
        let y = 234;
        const z = 345;
    }

    console.log(`global new : ${x}`);
    console.log(`global new : ${y}`);
    console.log(`global new : ${z}`);

function scope(){
    var x = 10;
    let y = 20;
    const z = 30;
{
    // var x = 100;
    let y = 200;
    const z = 300;
    console.log(`local : ${x}`);
    console.log(`local : ${y}`);
    console.log(`local : ${z}`);
}

    console.log(`function : ${x}`);
    console.log(`function : ${y}`);
    console.log(`function : ${z}`);

}

scope();
    console.log(`After function : ${x}`);
    console.log(`After function : ${y}`);
    console.log(`After function : ${z}`);