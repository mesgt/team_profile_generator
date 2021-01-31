const inquirer = require("inquirer");
const fs = require("fs");

// const pageTemplate = require("./src/page-template");
const { Employee, employeeQ } = require('./src/Employee');
const { Manager, managerQ } = require('./src/Manager');
const { Engineer, engineerQ } = require('./src/Engineer');
const { Intern, internQ } = require('./src/Intern');

function menu() {
    console.log("Welcome to Team Profile Generator!")
    inquirer
        .prompt([ 
            {
                type: "list",
                message: "Please select a role or exit the app",
                choices: ["manager", "engineer", "intern", "exit"],
                name: "role",
            }
        ]).then(response => {
            if(response.role==="manager") {
                allEmployees();
                onlyManagers();
                // console.log("success m");
            } 
            else if(response.role==="engineer") {
                allEmployees();
                onlyEngineers();
                // console.log("success e");
            }    
            else if(response.role==="intern") {
                allEmployees();
                onlyInterns();
                // console.log("success i");
            }
            else {
            console.log("no workie");
            }
        })
};


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

function onlyEngineers() {
    inquirer
    .prompt(engineerQ)
    .then(response => console.log(response));
};

function onlyInterns() {
    inquirer
    .prompt(internQ)
    .then(response => console.log(response));
};

menu();
