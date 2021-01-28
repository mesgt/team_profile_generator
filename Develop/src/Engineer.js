function Engineer(manager, employeeID, email, officeNumber) {
    if (typeof manager !== "string" || !manager.trim().length) {
        throw new Error("Expected parameter 'manager' to be a non-empty string");
    };
    if (typeof employeeID.length !=5) {
        throw new Error("Employee ID must be 5 characters long");
    };
    if (typeof email //does not contain '@', it is not valid.\\ 
    ) { throw new Error("Please type in a valid email address");
    };
    if (typeof officeNumber.length !=10) {
        throw new Error("Please type in a valid office phone number");
    };
    
    this.manager = manager;
    this.employeeID = employeeID;
    this.email = email;
    this.officeNumber = officeNumber;
}

module.export = Engineer;