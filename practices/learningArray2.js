const courses = [
    {id: 1,
    name: "AAA"},
    {id: 2,
    name: "CCC"},
    {id: 3,
    name: "bBB"}
]

const course = courses.find(function(element){
    return element.name === 'BBB'
})
console.log(course);

const index = courses.findIndex(function(element){
    return element.name === 'BBB'
})

//use arrow function for callback function, if only one parameter, dont need (), if no parameter ()=>
//if function just has 1 line of code, no need return and {}
const index1 = courses.findIndex(element => element.name === 'BBB')
console.log(index1);

const sortCourse = courses.sort((a,b)=>{
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB ) return -1
    if (nameA > nameB ) return 1
    return 0
})
console.log(sortCourse);