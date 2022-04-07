const person = {
    firstName : "Asif",
    lastName : "Hasan",
    age : 26,
    id : 1,
    fullName : function(){
        // this.fullName();
        console.log('First Name', this.firstName);
        return this.firstName  + " " + this.lastName
    }
}

console.log('person', person);

// person.forEach()

Object.entries(person).forEach((element)=>{
 console.log('element', element);
})