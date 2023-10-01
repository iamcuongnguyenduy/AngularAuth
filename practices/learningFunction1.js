run()
//Call declaration function before it, works fine because of Hoisting: process to move all
//declaration function to the top of file when running it.

//walk()
//call not call here because no Hoisting for expression function

//declaration function
function run(){
    console.log("Running");
}

//expression function
let walk = function(){
    console.log("Walking");
}
walk()


function sum(){
    console.log(arguments)
    let total;
    for (let value of arguments)
        total += value;
    return total;
}
console.log(`Sum is ${sum(2,5,7,9)}`);

//rest operator ...args if we have many parameters, 
//put it in last of parammeter like function (discout, a, b, ...price)
function sum(...args){
    return args.reduce((a,b) => a + b)
}
console.log(`Sum is ${sum(2,5,7,9)}`);


//default parameter
function total(a, b=5, c= 6){
    return (a + b + c)
}

console.log(total(1, 2));