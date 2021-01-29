const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(gitHub) {
        this.gitHub = gitHub;
    }

    getName() {
        console.log(this.name)
    }
}








module.exports = Engineer;


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

