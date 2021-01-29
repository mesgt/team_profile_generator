const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./src/Employee");
const Manager = require("./src/Manager");
const Engineer = require("./src/Engineer");
const Intern = require("./src/Intern");
const pageTemplate = require("./src/page-template");



function menu() {
    inquirer.prompt([
    {
        type: "list",
        message: "Please select your role or exit the app",
        choices: ["manager", "engineer", "intern", "exit"], //compound the information or exit with a message "no info gen"
        name: "role",
    },
]).then(answers => {
    if(answers.role === "manager") {
        console.log("manager")
        // manager = new Manager //initiate function for manager Q
    }
    else if(answers.role === "engineer") {
        console.log("engineer")//initiate function for engineer Q
    }
    else if(answers.role === "intern") {
        console.log("intern") //initiate function for intern Q
    }
    else //stop the function
        return
})
}; 


menu();
