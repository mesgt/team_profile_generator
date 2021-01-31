const inquirer = require("inquirer");
const fs = require("fs");
const { Employee } = require("./Employee");

const engineerQ = [
    {
        type: "input",
        message: "What is your gitHub username?",
        name: "gitHub",
    },
]
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

// module.exports = Engineer;
module.exports = {
    Engineer,
    engineerQ, 
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

