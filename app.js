const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
// const path = require("path");
const fs = require("fs");

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./lib/htmlRenderer");

// Array to store user responses
const employeeResponseArr = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const employeeQuestionArr = [

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
    },
    {
        type: 'list',
        name: 'employeeOption',
        message: 'Confirm role of team member:',
        choices: [ 'Manager', 'Engineer', 'Intern', 'Finished' ]
    }

];

const managerQuestionArr = [
    
    // {
    //     type: 'input',
    //     name: 'managerName',
    //     message: 'Enter Manager\'s name:'
    // },
    // {
    //     type: 'list',
    //     name: 'managerRole',
    //     message: 'Confirm role of team member:',
    //     choices: [ 'Manager', 'Engineer', 'Intern' ]
    // },
    // {
    //     type: 'input',
    //     name: 'managerId',
    //     message: 'Enter Manager\'s ID number:',
    //     default: 'Employee'
    // },
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
    
    // {
    //     type: 'input',
    //     name: 'engName',
    //     message: 'Enter Engineer\'s name:'
    // },
    // {
    //     type: 'list',
    //     name: 'engineerRole',
    //     message: 'Confirm role of team member:',
    //     choices: [ 'Manager', 'Engineer', 'Intern' ]
    // },
    // {
    //     type: 'input',
    //     name: 'engId',
    //     message: 'Enter Engineer\'s ID number:'
    // },
    {
        type: 'input',
        name: 'engGithub',
        message: 'Enter GitHub username:'
    }
];

const internQuestionArr = [

    // {
    //     type: 'input',
    //     name: 'internName',
    //     message: 'Enter Intern\'s name:'
    // },
    // {
    //     type: 'list',
    //     name: 'engineerRole',
    //     message: 'Confirm role of team member:',
    //     choices: [ 'Manager', 'Engineer' , 'Intern' ]
    // },
    // {
    //     type: 'input',
    //     name: 'internId',
    //     message: 'Enter Intern\'s ID number:'
    // },
    {
        type: 'input',
        name: 'internSchool',
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
                    inquirer.prompt(managerQuestionArr).then((mgrResponse) => {

                        let name = mgrResponse.name;
                        let id = mgrResponse.id;
                        let email = mgrResponse.email;
                        let officeNumber = mgrResponse.officeNumber;

                        const managerEmployee = new Manager(name, id, email, officeNumber);

                        employeeResponseArr.push(response);
                        employeeResponseArr.push(managerEmployee);

                        console.log(employeeResponseArr);

                        fs.appendFileSync("main.html", 
                        `
                        <!DOCTYPE html>
                        <html lang="en">
                            <head>
                                <meta charset="UTF-8">
                                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
                                <title>Document</title>
                            </head>
                            <body>
                                <div class="card rounded" style="width: 18rem;">
                                    <!-- <img src="..." class="card-img-top" alt="..."> -->
                                    <div class="card-body bg-primary text-white">
                                        <h2 class="card-title">${mgrResponse.name}</h5>
                                        <h3 class="card-text">${response.employeeOption}</h3>
                                    </div>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">ID Number: ${response.employeeId}</li>
                                            <li class="list-group-item">Email: <a href="mailto:${mgrResponse.email}">${mgrResponse.email}</a></li>
                                            <li class="list-group-item">Office Number: ${mgrResponse.officeNumber}</li>
                                        </ul>
                                </div>
                            </body>
                        </html>
                        `
                        , function(err) {
                            if (err) {
                                console.log(err);
                            }
                            else {
                                console.log("Success");
                            }
                        });

                    });
                } else if (response.employeeOption === 'Engineer') {
                    inquirer.prompt(engineerQuestionArr).then((engrResponse) => {

                        let name = engrResponse.name;
                        let id = engrResponse.id;
                        let email = engrResponse.email;
                        let github = engrResponse.github;

                        const engineerEmployee = new Engineer(name, id, email, github);

                        employeeResponseArr.push(response);
                        employeeResponseArr.push(engineerEmployee);

                        console.log(employeeResponseArr);

                    });
                } else if (response.employeeOption === 'Intern') {
                    inquirer.prompt(internQuestionArr).then((internResponse) => {

                        let name = internResponse.name;
                        let id = internResponse.id;
                        let email = internResponse.email;
                        let school = internResponse.school;

                        const internEmployee = new Intern(name, id, email, school);

                        employeeResponseArr.push(response);
                        employeeResponseArr.push(internEmployee);

                        console.log(employeeResponseArr);

                    });
                } else {
                    
                    console.log('Generating team org page...')
                    // buildTeamSummary();

                }
            });
        
};


// function buildTeamSummary() {

//     fs.writeFile(outputPath, render(employeeResponseArr), function(error) {
//         if (error) {
//             return console.log(error)
//         }
//     })

// }


init();

// function init() {
//     inquirer
//         .prompt(employeeQuestionArr)
//             .then((response) => {
//                 if(response.employeeRole === 'Manager') {
//                     inquirer.prompt(managerQuestionArr);
//                 } else if (response.employeeRole === 'Engineer') {
//                     inquirer.prompt(engineerQuestionArr);
//                 } else {
//                     inquirer.prompt(internQuestionArr);
//                 }
//             });
        
        
// };

// init();

// function init() {
    
//     managerQuestions();
// }




// function nextEmployee() {
//     inquirer.prompt(addEmployee).then((response) => {

//         console.log(response);
//         switch (response.newTeamMember) {
//             case 'Manager':
//                 managerQuestions();
//                 break;
//             case 'Engineer':
//                 engineerQuestions();
//                 break;
//             case 'Intern':
//                 internQuestions();
//                 break;
//             case 'Finished':
//                 console.log('Generating team org page...')
//                 createTeamOrg();
//         }
//     })
// }



// function managerQuestions()

//     inquirer.prompt(managerQuestionArr).then((response) => {

//         nextEmployee();

//     })



// function generateHTML(answersIntern) {
//     return `
//     <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
// </head>
// <body>
//     <div class="card" style="width: 18rem;">
//         <img src="..." class="card-img-top" alt="...">
//         <div class="card-body">
//             <h5 class="card-title">Manager</h5>
//             <p class="card-text">Managers help our employees achieve company objectives!</p>
//         </div>
//         <ul class="list-group list-group-flush">
//             <li class="list-group-item">Cras justo odio</li>
//             <li class="list-group-item">Dapibus ac facilisis in</li>
//             <li class="list-group-item">Vestibulum at eros</li>
//         </ul>
//         <div class="card-body">
//             <a href="#" class="card-link">Card link</a>
//             <a href="#" class="card-link">Another link</a>
//         </div>
//     </div>
// </body>
// </html>
//     `;
// }





// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!


// function makeTeamSummary() {
//     fs.writeFile(outputPath, render(employeeArr), function(error) {
//         if(error) {
//             return console.log(error)
//         }
//     }
// )}


// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
