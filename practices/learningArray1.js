const number = [3,4];

//adding end
number.push(5,6);

//add first
number.unshift(1,2)

//add middle [index, delete?, number]
number.splice(2, 0, ["a", "b"])
console.log(number);

const number1 = [2,3,4,1,2,4,5,1,6]

console.log(number1.indexOf(1));
console.log(number1.indexOf(1,4));
console.log(number1.lastIndexOf(2));
console.log(number1.includes(8));
console.log(number1.sort());
console.log(number1.reverse());

const number1POP = number1.pop()
console.log(number1);
console.log(number1POP);

number1.shift()
console.log(number1);

console.log("Splice");
const numberSplice = number1.splice(2, 2)
console.log(numberSplice);
console.log(number1);
//empty array
//solution1: number1 = [] if no reference to number1 like another = number1
//solution2: number1.length = 0;

const first = [1,2,3]
const second = [4,5,6]
const third = [{id: 10}]

const combine1 = first.concat(second)
console.log(combine1);
for (let value of combine1)
    console.log(value);
combine1.forEach((number, index)=> console.log(index, number));

// const slice1 = combine1.slice(2)
const slice2 = combine1.slice(2,4)
console.log(slice2);

const combine2 = first.concat(third)
third[0].id = 20;
console.log(combine2);



