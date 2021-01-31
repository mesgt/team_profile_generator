const inquirer = require("inquirer");
const fs = require("fs");
const index = require("../index");
const { Employee, employeeQ, team } = require("./Employee");
// const team = [];

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }

getRole() {
    return "Engineer";
}

getGithub() {
    return this.github
}
}

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
    console.log(team);
    // call the next function
});

// module.exports = Engineer;
module.exports = {
    Engineer,
    engineerQ,
    // team
};

// function Engineer(name, employeeID, email, gitHubName) {
//     if (typeof name !== "string" || !name.trim().length) {
//         throw new Error("Expected parameter 'name' to be a non-empty string");
//     };
//     if (typeof employeeID.length !=5) {
//         throw new Error("Employee ID must be 5 characters long");
//     };
//     if (typeof email //does not contain '@', it is not valid.\\ 
//     ) { throw new Error("Please type in a valid email address");
//     };
//     if (typeof gitHubName !== "string" || !gitHubName.trim().length) {
//         throw new Error("Expected parameter 'gitHubName' to be a non-empty string");
//     };
    
//     this.name = name;
//     this.employeeID = employeeID;
//     this.email = email;
//     this.gitHubName = gitHubName;
// }

