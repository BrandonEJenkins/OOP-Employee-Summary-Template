const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
// const path = require("path");
// const fs = require("fs");

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./lib/htmlRenderer");


const question = [

    {
        type: 'list',
        name: 'employeeRole',
        message: 'Confirm role of team member:',
        choices: [ 'Manager', 'Engineer', 'Intern' ]
    }

];

const managerQuestions = [

    {
        type: 'checkbox',
        name: 'license',
        message: 'Select an manager license(s).',
        choices: [
            {
                name: 'bossy pants',
                checked: true
            },
            {
                name: 'stinky butt bossy poo'
            }
        ]
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your son\'s username?',
        default: 'username'
    },

]

const engineerQuestions = [

    {
        type: 'checkbox',
        name: 'license',
        message: 'Select an engineer tool(s).',
        choices: [
            {
                name: 'engineer pants',
                checked: true
            },
            {
                name: 'foo bar'
            }
        ]
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your friendgineer\'s username?',
        default: 'username'
    },

]

const internQuestions = [

    {
        type: 'checkbox',
        name: 'license',
        message: 'Select an intern license(s).',
        choices: [
            {
                name: 'tourney pants',
                checked: true
            },
            {
                name: 'internsman'
            }
        ]
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your son\'s username?',
        default: 'username'
    },

]


// function init() {
//     inquirer
//         .prompt(question)
//             .then((response) => {
//                 if(response.employeeRole === 'Manager') {
//                     return prompt(managerQuestions);
//                 } else if (response.employeeRole === 'Engineer') {
//                     return prompt(engineerQuestions);
//                 } else {
//                     return prompt(internQuestions);
//                 }
//             });
// };

function init() {
    inquirer
        .prompt(question)
            .then((response) => {
                if(response.employeeRole === 'Manager') {
                    inquirer.prompt(managerQuestions);
                } else if (response.employeeRole === 'Engineer') {
                    inquirer.prompt(engineerQuestions);
                } else {
                    inquirer.prompt(internQuestions);
                }
            });
};

init();