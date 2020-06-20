const Employee = require("./Employee");

class Manager extends Employee {
    constructor(officeNumber) {
        super(); // Must use the super() operator so 'this' is initialized by calling the parent constructor
        this.officeNumber = officeNumber;
    }
    getRole() {
        console.log("Manager");
    }
}

module.exports = Manager;