//Create employee parent class
// name, id, email, getName(), getEmail(), getRole()- returns 'employee'

class Employee {
    constructor (name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    }

    getName(){
    const str = this.name;
    return str;
    }

    getEmail(){
        console.log('getEmail run')
        return this.email;
    }

    getRole(){
        console.log('getRole run')
        return 'Employee';
    }
}

module.exports = Employee;
