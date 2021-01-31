const inquirer = require("inquirer");
const fs = require("fs");
const index = require("../index");
const { Employee, employeeQ } = require("./Employee");


let teamManager = [];


class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
    
getRole() {
    return "Manager";
}

getOfficeNumber() {
    return this.officeNumber;
}
}

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
    teamManager.push(manager);
    console.log(teamManager);
    // index.menu(); //call the next function
});

// module.exports = Manager;
module.exports = {
    Manager,
    managerQ,
    teamManager
};

// function Manager(name, employeeID, email, officeNumber) {
    
//     if (typeof name !== "string" || !name.trim().length) {
//         throw new Error("Expected parameter 'name' to be a non-empty string");
//     };
//     if (typeof employeeID.length !=3) {
//         throw new Error("Employee ID must be 3 characters long");
//     };
//     if (typeof email //does not contain '@', it is not valid.\\ 
//     ) { throw new Error("Please type in a valid email address");
//     };
//     if (typeof officeNumber.length !=3) {
//         throw new Error("Please type in a valid office phone number");
//     };

//     this.name = name;
//     this.employeeID = employeeID;
//     this.email = email;
//     this.officeNumber = officeNumber;

// };
