const message = 'This is my string';

const obj = new String("This is my Object")

//Object {}
//String: '', ""
//Template literal: ``

const stringTest = 'This is \n my \'first\' string'
const stringTemp = `This is my
'first' test`

const now = new Date()
const date1 = new Date("May 18 2023 20:00")
const date2 = new Date(2023, 5, 20, 20)

console.log(now.toISOString());

//ex1
const address = {
    street: "LBB",
    city: "HCM",
    zipcode: 70000
}

function createAddress(street, city, zipcode){
    return {
        street,
        city,
        zipcode
    }
}
const address1 = createAddress("LBB", "SG", 123)

function ConstructAddress(street, city, zipcode){
    this.street = street,
    this.city = city,
    this.zipcode = zipcode
}
const address2 = new ConstructAddress("LBB", "SG", 111)
const address3 = new ConstructAddress("LBB", "SG", 111)

function showAddress(address){
    for (let value in address)
        console.log(value, address[value]);
}

showAddress(address2)


function areEqual(address1, address2){
    for (let key in address1){
        console.log(address1[key], address2[key]);
        if(address1[key] !== address2[key]){
            console.log("Not equal");
            return
        }           
    }
    console.log("Both are equal");
}

function areSame(address1, address2){
    if (address1 === address2)
        console.log("Both are same");
    console.log("Not same");
}

areSame(address2, address3)
areEqual(address2, address3)