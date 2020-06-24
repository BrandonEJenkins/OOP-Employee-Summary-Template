const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Array to store user responses
const employeeResponseArr = [];

const employeeQuestionArr = [

    {
        type: 'list',
        name: 'employeeOption',
        message: 'Confirm role of team member:',
        choices: [ 'Manager', 'Engineer', 'Intern', 'Finished' ]
    },
    {
        type: 'input',
        name: 'employeeName',
        message: 'Enter name of team member:'
    },
    {
        type: 'input',
        name: 'employeeId',
        message: 'Enter ID number:',
        default: 'Employee'
    }

];

const managerQuestionArr = [

    {
        type: 'input',
        name: 'email',
        message: 'Enter Manager\'s email address:'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter Manager\'s office number:'
    }

];

const engineerQuestionArr = [

    {
        type: 'input',
        name: 'github',
        message: 'Enter GitHub username:'
    }

];

const internQuestionArr = [

    {
        type: 'input',
        name: 'school',
        message: 'Enter Intern\'s school:'
    }

];

// const addEmployee = [

//     {
//         type: 'list',
//         name: 'newTeamMember',
//         message: 'Select role of team member to add: ',
//         choices: ['Manager', 'Engineer', 'Intern', 'Finished']
//     }

// ];

function init() {
    inquirer
        .prompt(employeeQuestionArr)
            .then((response) => {
                if(response.employeeOption === 'Manager') {
                    inquirer.prompt(managerQuestionArr).then((response) => {

                        let name = response.name;
                        let id = response.id;
                        let email = response.email;
                        let officeNumber = response.officeNumber;

                        const manager = new Manager(name, id, email, officeNumber);

                        employeeResponseArr.push(response);
                        employeeResponseArr.push(manager);

                        console.log(employeeResponseArr);

                        init();

                    });
                } else if (response.employeeOption === 'Engineer') {
                    inquirer.prompt(engineerQuestionArr).then((response) => {

                        let name = response.name;
                        let id = response.id;
                        let email = response.email;
                        let github = response.github;

                        const engineer = new Engineer(name, id, email, github);

                        employeeResponseArr.push(response);
                        employeeResponseArr.push(engineer);

                        console.log(employeeResponseArr);

                        init();

                    });
                } else if (response.employeeOption === 'Intern') {
                    inquirer.prompt(internQuestionArr).then((response) => {

                        let name = response.name;
                        let id = response.id;
                        let email = response.email;
                        let school = response.school;

                        const intern = new Intern(name, id, email, school);

                        employeeResponseArr.push(response);
                        employeeResponseArr.push(intern);

                        console.log(employeeResponseArr);

                        init();

                    });
                } else {
                    
                    console.log('Generating team org page...')
                    buildTeamSummary();

                }
            });

};

function buildTeamSummary() {

    fs.writeFile(outputPath, render(employeeResponseArr), function(err) {
        if (err) {
            return console.log(err)
        }
    })

}

init();
