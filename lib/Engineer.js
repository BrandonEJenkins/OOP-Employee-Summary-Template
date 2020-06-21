const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email); // Must use the super() operator so 'this' is initialized by calling the parent constructor
        this.github = github;
        this.role = 'Engineer';
    }

    getRole() {
        return this.role;
    }

    getGithub() {
        return this.github;
    }

    getEmail() {
        return this.email;
    }
}

module.exports = Engineer;