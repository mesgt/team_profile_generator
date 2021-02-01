const inquirer = require("inquirer");
const fs = require("fs");

// const team = require("./src/page-template");
const { Employee } = require('./src/Employee');
const { Manager } = require('./src/Manager');
const { Engineer } = require('./src/Engineer');
const { Intern } = require('./src/Intern');

let teamArr = [];

//Employee questions
const employeeQ = [
    {
        type: "input",
        message: "What is the employee's full name?",
        name: "name",
    },
    {
        type: "input",
        message: "What is the employee ID?",
        name: "id",
    },
    {
        type: "input",
        message: "What is the employee's email address?",
        name: "email",
    }
];

const managerQ = () =>
    inquirer
    .prompt([
    ...employeeQ,
    {
        type: "input",
        message: "What is the manager's office number?",
        name: "officeNumber",
    },
    {
        type: "list",
        message: "You are done entering information for the manager. Would you like to enter another empployee or render the webpage?",
        choices: ["add another employee", "render webpage"],
        name: "chooseNext"
    }
]).then (response => {
    let newManager = new Manager(response.name, response.id, response.email, response.officeNumber)
    teamArr.push(newManager);
    // console.log(teamArr);
    // index.menu(); //call the next function
});

const engineerQ = () =>
    inquirer
    .prompt([
    ...employeeQ,
    {
        type: "input",
        message: "What is the engineer's GitHub username?",
        name: "github",
    },
    {
        type: "list",
        message: "You are done entering information for the engineer. Would you like to enter another empployee or render the webpage?",
        choices: ["add another employee", "render webpage"],
        name: "chooseNext"
    }
]).then (response => {
    let newEngineer = new Engineer(response.name, response.id, response.email, response.github)
    teamArr.push(newEngineer);
    console.log(teamArr);
    // call the next function
});

const internQ = () =>
inquirer
    .prompt([
    ...employeeQ,
    {
        type: "input",
        message: "What is the intern's school name?",
        name: "school",
    },
    {
        type: "list",
        message: "You are done entering information for the intern. Would you like to enter another empployee or render the webpage?",
        choices: ["add another employee", "render webpage"],
        name: "chooseNext"
    }
    ]).then (response => {
    let newIntern = new Intern(response.name, response.id, response.email, response.school)
    teamArr.push(newIntern);
    console.log(teamArr);
    // call the next function
    });

    const continueQ = () =>
    inquirer
        .prompt([
            {
                type: "confirm",
                message: "Would you like to add another employee?",
                name: "addNew"
            }
        ]). then(response => {
            if ()
        })

const addEmployee = () =>
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
                managerQ() 
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
        })


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
                addEmployee(); //employee and manager Q are asked, info pushed to team, and user asked if should continue or exit
            }
            else {
                console.error(err);
                return
            }
        })
    }



menu();
