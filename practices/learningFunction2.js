const person = {
    firstName: "Cuong",
    lastName: "Nguyen",
    walk(){
        console.log("Walking");
    },
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value){
        if(typeof value !== 'string')
            throw new Error("Full name must be string")
        const parts = value.split(" ")
        if (parts.length !== 2)
            throw new Error("Full name must be corrected")
        this.firstName = parts[0],
        this.lastName = parts[1]
    }
}
try {
    person.fullName = "A B"
} catch (error) {
    alert(error)    
}

console.log(person.fullName);