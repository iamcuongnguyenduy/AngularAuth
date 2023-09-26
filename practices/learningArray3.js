const number1 = [1,2,3,4,5,6, -2]

const allPossitive = number1.every((number)=> number >=0)
console.log(allPossitive);

const atLeastOnePositive = number1.some(number => number >=0)
console.log(atLeastOnePositive);

const positiveArray = number1.filter(n => n>=0)
console.log(positiveArray);

let sum = 0;
for (let n of number1)
    sum += n;
console.log(sum);

//> another way to do that sum


const cal = number1.reduce((accumulator, currentValue) => accumulator += currentValue, 0)
//0 is initialze for accumulator
//if not initialize, accumulator get initialized by first currentValue
console.log(cal);