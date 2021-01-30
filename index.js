const inquirer = require("inquirer");
const fs = require("fs");
// const employee = require("./src/Employee");
// const Manager = require("./src/Manager");
// const Engineer = require("./src/Engineer");
// const Intern = require("./src/Intern");
// const pageTemplate = require("./src/page-template");
const { Employee, employeeQ } = require('./src/Employee');
const { Manager, managerQ } = require('./src/Manager');
// const { Engineer, engineerQ } = require('./src/Engineer');
// const { Intern, internQ } = require('./src/Intern');


function menu() {
    console.log("Welcome to Team Profile Generator!")
    inquirer
        .prompt( 
            {
                type: "list",
                message: "Please select a role or exit the app",
                choices: ["manager", "engineer", "intern", "exit"],
                name: "role",
            },
        ).then(role => ("manager" || "engineer" || "intern") 
        ? allEmployees()//if response is one of employees
        : console.log("no workie")); //if reponse is exit, also add error log
    if (menu.role==="manager") {
        onlyManagers()
        console.log("success m");
    }
    // if (role==="engineer") {
    //     onlyEngineers();
    //     console.log("success e");
    // }
    // if (role==="intern") {
    //     onlyInterns();
    //     console.log("success i");
    // }
    // else
    //     close()
}



function allEmployees() {
    inquirer
    .prompt(employeeQ)
    .then(response => console.log(response));
};

function onlyManagers() {
    inquirer
    .prompt(managerQ)
    .then(response => console.log(response));
};

// function onlyEngineers() {
//     inquirer
//     .prompt(engineerQ)
//     .then(response => console.log(response));
// };

// function onlyInterns() {
//     inquirer
//     .prompt(internQ)
//     .then(response => console.log(response));
// };


menu();
