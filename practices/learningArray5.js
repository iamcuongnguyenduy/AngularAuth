//original array
const numbers = [1,2,3,4,5,1,2]

//function move (array, index, newIndex)
function moveElement(array, index, newIndex){
    let output;
    if (newIndex <-1 || newIndex > array.length)
        console.error("Invalid newIndex")
    else if (index < 0 || index >= array.length)
        console.error("Invalid index")
    else if (index === newIndex)
        return array
    else {
        if (newIndex === -1) newIndex = 0;
        let original = index;
        if (index < newIndex){
            array.splice(newIndex, 0, array[index])
            array.splice(original , 1)
        }
        else{
            array.splice(newIndex, 0, array[index])
            array.splice(original+1 , 1)   
        }
        return array
    }
}

//output new array
const output = moveElement(numbers, 0, -1)
console.log(output); 

function countOccurences(array, value){
     
    return array.reduce((accumulator, currentValue) =>{
        if (currentValue === value)
           accumulator ++;
        return accumulator;
    }, 0)
}
console.log(countOccurences(numbers, 2));

function getMax(array){
    // let max = array[0];
    // for (let value of array){
    //     if (value > max)
    //         max = value;
    // }
    // return max;

    return array.reduce((a,b) => (a>b)? a: b)
}
console.log(getMax(numbers));