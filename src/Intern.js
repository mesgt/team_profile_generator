const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }

getRole() {
    return "Intern";
}

getSchool() {
    return this.school;
}
}

module.exports = Intern;






// function Intern(name, employeeID, email, school) {
//     if (typeof name !== "string" || !name.trim().length) {
//         throw new Error("Expected parameter 'name' to be a non-empty string");
//     };
//     if (typeof employeeID.length !=3) {
//         throw new Error("Employee ID must be 3 characters long");
//     };
//     if (typeof email //does not contain '@', it is not valid.\\ 
//     ) { throw new Error("Please type in a valid email address");
//     };
//     if (typeof school !== "string" || !school.trim().length) {
//         throw new Error("Expected parameter 'school' to be a non-empty string");
//     };
    
//     this.name = name;
//     this.employeeID = employeeID;
//     this.email = email;
//     this.school = school;
// }

// module.exports = Intern;