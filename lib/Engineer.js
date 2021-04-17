const Employee = require('./Employee');


//Create engineer class
// inherit attributes from employee parent class, also:
// github- github username, getRole()- overridden to return 'engineer'

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email)
    this.github = github;
    }

    getRole(){
        return 'Engineer';
    }
}

module.exports = Engineer;
