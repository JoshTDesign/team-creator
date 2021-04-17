const Employee = require('./Employee');


// Create intern class
// inherit attributes from employee parent class, also:
// school, getSchool(), getRole()-overridden to return 'Intern'

class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }

    getRole(){
        return 'Intern';
    }

    getSchool(){
        return this.school;
    }
}

module.exports = Intern;
