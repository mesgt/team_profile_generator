const inquirer = require("inquirer");
const fs = require("fs");

const html = require("./src/page-template");
const { Manager } = require('./src/Manager');
const { Engineer } = require('./src/Engineer');
const { Intern } = require('./src/Intern');

let teamArr = [];

//Main menu
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
            if (response.intro === "build a team") {
                addEmployee();
            }
            else {
                console.error(err);//add exit
                return
            }
        })
};

//Add an employee
const addEmployee = () =>
    inquirer
        .prompt([
            {
                type: "list",
                message: "Please select employee role",
                choices: ["manager", "engineer", "intern"],
                name: "role",
            }
        ]).then((response) => {
            if (response.role === "manager") {
                managerQ()
            }
            else if (response.role === "engineer") {
                engineerQ();
            }
            else if (response.role === "intern") {
                internQ();
            }
            else {
                // process.exit();
                console.log("not working") //throw error
            }
        });

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
                message: "You are done entering information for the manager. Would you like to enter another empployee or render the team webpage?",
                choices: ["add another employee", "render webpage"],
                name: "chooseNext"
            }
        ]).then(response => {
            let newManager = new Manager(response.name, response.id, response.email, response.officeNumber)
            teamArr.push(newManager);
            if (response.chooseNext === "add another employee") {
                addEmployee()
            } else {
                renderPage()
            }
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
                message: "You are done entering information for the engineer. Would you like to enter another empployee or render the team webpage?",
                choices: ["add another employee", "render webpage"],
                name: "chooseNext"
            }
        ]).then(response => {
            let newEngineer = new Engineer(response.name, response.id, response.email, response.github)
            teamArr.push(newEngineer);
            if (response.chooseNext === "add another employee") {
                addEmployee()
            } else {
                renderPage()
            }
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
                message: "You are done entering information for the intern. Would you like to enter another empployee or render the team webpage?",
                choices: ["add another employee", "render webpage"],
                name: "chooseNext"
            }
        ]).then(response => {
            let newIntern = new Intern(response.name, response.id, response.email, response.school)
            teamArr.push(newIntern);
            if (response.chooseNext === "add another employee") {
                addEmployee()
            } else {
                renderPage()
            }
        });


function renderPage() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Please enter the team name:",
                name: "teamName",
            }
        ]).then(response => {
            fs.mkdirSync(__dirname + "/dist/" + `${response.teamName}/`);
            fs.writeFileSync(__dirname + "/dist/" + `${response.teamName}/` + "index.html", html(teamArr), (err) => err
                ? console.error(err)
                : console.log("Success!"))
        })
};

menu();
