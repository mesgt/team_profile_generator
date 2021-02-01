const inquirer = require("inquirer");
const fs = require("fs");

// const team = require("./src/page-template");
const { Employee } = require('./src/Employee');
const { Manager } = require('./src/Manager');
// const { engineerQ } = require("./src/Engineer");
const { Engineer } = require('./src/Engineer');
const { Intern } = require('./src/Intern');

let team = [];

//Employee questions
const employeeQ = [
    {
        type: "input",
        message: "What is your full name?",
        name: "name",
    },
    {
        type: "input",
        message: "What is your employee ID?",
        name: "id",
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email",
    }
];

const managerQ = () =>
    inquirer
    .prompt([
    ...employeeQ,
    {
        type: "input",
        message: "What is your office number?",
        name: "officeNumber",
    }
]).then (response => {
    // console.log("we will win managers")
    let manager = new Manager(response.name, response.id, response.email, response.officeNumber)
    // console.log(manager);
    team.push(manager);
    // return teamManager;
    console.log(team);
    // index.menu(); //call the next function
});

const engineerQ = () =>
    inquirer
    .prompt([
    ...employeeQ,
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github",
    },
]).then (response => {
    // console.log("we will win engineers")
    let engineer = new Engineer(response.name, response.id, response.email, response.github)
    // console.log(engineer);
    team.push(engineer);
    // return team
    console.log(team);
    // call the next function
});

const internQ = () =>
inquirer
    .prompt([
    ...employeeQ,
    {
        type: "input",
        message: "What is the name of your school?",
        name: "school",
    },
    ]).then (response => {
    // console.log("we will win interns")
    let intern = new Intern(response.name, response.id, response.email, response.school)
    // console.log(intern);
    team.push(intern);
    // return team
    console.log(team);
    // call the next function
    });
    // .then(response => console.log(response));


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
                        if (answer.role==="manager"){
                            managerQ() //employee and manager Q are asked, info pushed to team, and user asked if should continue or exit
                        } 
                        else if (answer.role==="engineer"){
                            engineerQ();
                        }
                        else if (answer.role==="intern"){
                            internQ();
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
    }





menu();
