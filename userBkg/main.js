function Person(Name,Lname){
    this.firstName = Name
    this.lastName = Lname
}

const person1 = new Person('Bruce','Wayne')
const person2 = new Person('Tom','Riddle')

Person.prototype.getFullName = function(){
    return this.firstName + ' ' + this.lastName
}