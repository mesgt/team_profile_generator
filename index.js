const inquirer = require("inquirer");
const fs = require("fs");
// const employee = require("./src/Employee");
// const Manager = require("./src/Manager");
// const Engineer = require("./src/Engineer");
// const Intern = require("./src/Intern");
// const pageTemplate = require("./src/page-template");
const { Employee, employeeQ } = require('./src/Employee');




function menu() {
    console.log("Welcome to Team Profile Generator!")
    inquirer
        .prompt( 
            {
                type: "list",
                message: "Please select a role or exit the app",
                choices: ["manager", "engineer", "intern", "exit"],
                name: "role",
            },
        ).then(role => ("manager" || "engineer" || "intern") 
        ? allEmployees()//if response is one of employees
        : console.log("no workie")); //if reponse is exit, also add error log
    if (role==="manager") {
        
    }
                // inquirer
                //     .prompt(employeeQ)
                //     .then(response => console.log(response));
        
}

    // }
//             {
//     if(response.role === "manager") {
//         console.log(response.role)
//         manager(); //initiate function for manager Q
//     }
//     else if(response.role === "engineer") {
//         console.log(response.role);
//         engineer(); //initiate function for engineer Q
//     }
//     else if(response.role === "intern") {
//         console.log(response.role);
//         intern();  //initiate function for intern Q
//     }
//     else //stop the function
//         return
// })
// }; 

function allEmployees() {
    inquirer
    .prompt(employeeQ)
    .then(response => console.log(response));
}
// function manager() {
//     inquirer.prompt ([
//         {
//             type: "input",
//             message: "What is your office number?",
//             name: "officeNumber",
//         },
//     ]).then(answers => {
//         console.log(answers); //object containing answers.
//         menu();
//     })
// };

// function engineer() {
//     inquirer.prompt ([
//         {
//             type: "input",
//             message: "What is your gitHub username?",
//             name: "gitHub",
//         },
//     ]).then(answers => {
//         console.log(answers); //object containing answers.
//         menu();
//     })
// };

// function intern() {
//     inquirer.prompt ([
//         {
//             type: "input",
//             message: "What is the name of your school?",
//             name: "school",
//         },
//     ]).then(answers => {
//         console.log(answers); //object containing answers.
//         menu();
//     })
// };


menu();
