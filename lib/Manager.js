const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) { // When using extends the constructor must still contain the arguments of the parent
        super(name, id, email); // Must use the super() operator so 'this' is initialized by calling the parent constructor
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;