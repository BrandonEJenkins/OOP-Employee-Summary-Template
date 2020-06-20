const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(github) {
        super(); // Must use the super() operator so 'this' is initialized by calling the parent constructor
        this.github = github;
    }
    getRole() {
        console.log("Engineer");
    }
}

module.exports = Engineer;