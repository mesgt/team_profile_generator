class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
} 
    const employee = [
        new Employee("Sam", 2, "test@test.com")];

console.log(employee)

module.exports = Employee;







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

