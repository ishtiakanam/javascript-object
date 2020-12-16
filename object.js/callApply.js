const normalPerson = {
    firstName: 'John',
    lastName: 'Don',
    salary: 20000,
    getFullName: function() {
        console.log(this.firstName,this.lastName);
    },
    chargeBill : function(amount,tax , tips) {
        console.log(this );
         this.salary = this.salary - amount - tax - tips;
         return this.salary;
    }
}

const heroPerson = {
    firstName : "Ishtiak",
    lastName : "Fahim",
    salary : 10000,
}

const frindlyPerson = {
    firstName : "Kairul",
    lastName : "Tafhim",
    salary : 5000,
}

//normalPerson.chargeBill();
// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(1000);
// heroChargeBill(2000);
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);

// const frindlyChargeBill = normalPerson.chargeBill.bind(frindlyPerson);
// frindlyChargeBill(1500); 

// normalPerson.chargeBill.call(heroPerson,900 , 90 , 10);
// normalPerson.chargeBill.call(heroPerson,500 , 400 , 100)
// console.log(heroPerson.salary);

// normalPerson.chargeBill.call(frindlyPerson, 900 , 90 , 10);
// normalPerson.chargeBill.call(frindlyPerson,800, 190 , 10);
// console.log(frindlyPerson.salary);

// normalPerson.chargeBill.apply(heroPerson, [900, 90 , 10]);
// console.log(heroPerson.salary);

// normalPerson.chargeBill.apply(frindlyPerson, [900 , 90 , 10]);
// console.log(frindlyPerson.salary);