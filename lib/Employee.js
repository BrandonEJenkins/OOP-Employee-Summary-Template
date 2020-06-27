class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        // this.role = 'Employee';
    }

    getName() {
        return this.name;
    }

    getId() {
        // console.log(`Id: ${this.id}`);
        return this.id;
    }

    getEmail() {
        // console.log(`Email: ${this.emailAddress}`);
        return this.email;
    }

    getRole() {
        return 'Employee';
        // return this.role;
    }
}

module.exports = Employee;