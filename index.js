const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./src/Employee");
const Manager = require("./src/Manager");
const Engineer = require("./src/Engineer");
const Intern = require("./src/Intern");
const pageTemplate = require("./src/page-template");



function menu() {
    console.log("Welcome to Team Profile Generator!")
    inquirer.prompt([
    {
        type: "list",
        message: "Please select your role or exit the app",
        choices: ["manager", "engineer", "intern", "exit"], //compound the information or exit with a message "no info gen"
        name: "role",
    },
]).then(answers => {
    if(answers.role === "manager") {
        console.log(answers.role)
        // manager(); //initiate function for manager Q
    }
    else if(answers.role === "engineer") {
        console.log(answers.role);
        // engineer(); //initiate function for engineer Q
    }
    else if(answers.role === "intern") {
        console.log(answers.role);
        // intern();  //initiate function for intern Q
    }
    else //stop the function
        return
})
}; 

// function manager() {
//     inquirer.prompt ([
//         {
//             type: "input",
//             message: "What is your full name?",
//             name: "name",
//         },
//         {
//             type: "input",
//             message: "What is your employee ID?",
//             name: "employeeID",
//         },
//         {
//             type: "input",
//             message: "What is your email?",
//             name: "email",
//         },
//         {
//             type: "input",
//             message: "What is your office number?",
//             name: "officeNumber",
//         },
//     ]).then(answers => {
//         console.log(answers); //object containing answers.
//         menu();
//     })
// };

// function engineer() {
//     inquirer.prompt ([
//         {
//             type: "input",
//             message: "What is your full name?",
//             name: "name",
//         },
//         {
//             type: "input",
//             message: "What is your employee ID?",
//             name: "employeeID",
//         },
//         {
//             type: "input",
//             message: "What is your email?",
//             name: "email",
//         },
//         {
//             type: "input",
//             message: "What is your gitHub username?",
//             name: "gitHub",
//         },
//     ]).then(answers => {
//         console.log(answers); //object containing answers.
//         menu();
//     })
// };

// function intern() {
//     inquirer.prompt ([
//         {
//             type: "input",
//             message: "What is your full name?",
//             name: "name",
//         },
//         {
//             type: "input",
//             message: "What is your employee ID?",
//             name: "employeeID",
//         },
//         {
//             type: "input",
//             message: "What is your email?",
//             name: "email",
//         },
//         {
//             type: "input",
//             message: "What is the name of your school?",
//             name: "school",
//         },
//     ]).then(answers => {
//         console.log(answers); //object containing answers.
//         menu();
//     })
// };


menu();
