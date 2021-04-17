const Employee = require('./Employee');


//Create manager class
// inherit attributes from employee parent class, also:
// office number, getRole() - overridden to return 'Manager'

class Manager extends Employee {
    constructor (name, id, email, phone) {
        super(name, id, email);
    this.phone = phone;
    }

    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;
