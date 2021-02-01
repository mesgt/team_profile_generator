const inquirer = require("inquirer");
const fs = require("fs");
// const team = require("./src/page-template");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
    };

// module.exports = Employee;
module.exports = {
    Employee,
};







// const Manager = require("./Manager");
// const Engineer = require("./Engineer");
// const Intern = require("./Intern");
// function Employee() {
//     this.team = [];
// }

// Employee.prototype.addManager = function(manager) {
//     if (manager instanceof Manager === false) {
//         throw new Error("Expected parameter 'manager' to be an instance of Manager");
//     }
//     this.manager.push(team);
// }

// Employee.prototype.addEngineer = function(engineer) {
//     if (engineer instanceof Engineer === false) {
//         throw new Error("Expected parameter 'engineer' to be an instance of Engineer");
//     }
//     this.engineer.push(team);
// }

// Employee.prototype.addIntern = function(intern) {
//     if (intern instanceof Intern === false) {
//         throw new Error("Expected parameter 'intern' to be an instance of Intern");
//     }
//     this.intern.push(team);
// }

