function arrayRange(min, max){
    let numbers = [];
    for (let value = min; value <= max; value ++)
        numbers.push(value);
    return numbers;
}

const numbers = arrayRange(-10,5);
console.log(numbers);

function includess(array, value){
    for (let n of array){
        if (n === value)
            return true;
    }
    return false
    // index = array.indexOf(value)
    //     if(index !== -1) return true
    //     return false
}
console.log(includess(numbers, 5));

const number1 = [1,2,3,1,1,34,1]

function excepValue(array, filterArray){
    arrayOutput = array;
    for (let value of filterArray)
        arrayOutput = arrayOutput.filter(n => n !== value)
    return arrayOutput
  }
console.log(number1);
const output = excepValue(number1, [1, 2])
console.log(output);
