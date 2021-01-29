function Intern(name, employeeID, email, school) {
    if (typeof name !== "string" || !name.trim().length) {
        throw new Error("Expected parameter 'name' to be a non-empty string");
    };
    if (typeof employeeID.length !=5) {
        throw new Error("Employee ID must be 5 characters long");
    };
    if (typeof email //does not contain '@', it is not valid.\\ 
    ) { throw new Error("Please type in a valid email address");
    };
    if (typeof school !== "string" || !school.trim().length) {
        throw new Error("Expected parameter 'school' to be a non-empty string");
    };
    
    this.name = name;
    this.employeeID = employeeID;
    this.email = email;
    this.school = school;
}

module.export = Intern;