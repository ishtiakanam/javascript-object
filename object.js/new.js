class Person {
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}
const heroPerson = new Person("Ishtiak", "Fahim" , 10000);
console.log(heroPerson);
const friendlyPerson = new Person("kairul", "Tafhim", 5000);
console.log(friendlyPerson);

function person1(firstName, lastName, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}

const oldPerson = new Person ("Ishraful","Nowsat", 16000);
console.log(object);