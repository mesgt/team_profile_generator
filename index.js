const inquirer = require("inquirer");
const fs = require("fs");

// const team = require("./src/page-template");
// const { Employee, employeeQ } = require('./src/Employee');
const { Manager, managerQ } = require('./src/Manager');
// const { engineerQ } = require("./src/Engineer");
const { Engineer, engineerQ } = require('./src/Engineer');
const { Intern, internQ } = require('./src/Intern');

const team = [];

function menu() {
    console.log("Welcome to Team Profile Generator!")
    inquirer
        .prompt([ 
            {
                type: "list",
                message: "What would you like to do?",
                choices: ["build a team", "exit"],
                name: "intro",
            }
        ]).then(response => {
            if (response.intro==="build a team") {
                inquirer
                    .prompt([
                        {
                            type: "list",
                            message: "Please select an employee role",
                            choices: ["manager", "engineer", "intern"],
                            name: "role",
                        }
                    ]).then((answer) => {
                        // console.log(answer.role)
                        if (answer.role==="manager"){
                            onlyManagers();
                        } 
                        else if (answer.role==="engineer"){
                            onlyEngineer();
                        }
                        else if (answer.role==="intern"){
                            onlyInterns();
                        }
                        else {
                            // process.exit();
                            console.log("not working")
                        }
                    }
                    )}
            else {
                console.error(err);
                return
            }
        })


function onlyManagers() {
    managerQ()
    .then(response => console.log(response));
};

function onlyEngineers() {
    engineerQ()
    .then(response => console.log(response));
};

function onlyInterns() {
    internQ()
    .then(response => console.log(response));
};

}


menu();
