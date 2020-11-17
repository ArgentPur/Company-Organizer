const {prompt} = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");
const consoleT = require("console.table");

init();

function init() {
    const logoText = logo({name: "Company Organizer"}).render();
    console.log(logoText);

    runPrompts();
};

async function runPrompts() {
    const {choice} = await prompt([
        {
            type: "list",
            name: "choice",
            message: "Select an option to begin.",
            choices: [
                {
                    name: "View Staff Directory",
                    value: "VIEW_STAFF"
                },
                {
                    name: "View staff by department",
                    value: "VIEW_STAFF_BY_DEPARTMENT",
                },
                {
                    name: "View staff by manager",
                    value: "VIEW_STAFF_BY_MANAGER",
                },
                {
                    name: "Add Staff Member",
                    value: "ADD_EMPLOYEE",
                },
                {
                    name: "Remove Staff Member",
                    value: "REMOVE_EMPLOYEE",
                },
                {
                    name: "Quit",
                    value: "Quit",
                }
            ]
        }
    ])
};

async function viewEmployees(){
    const employees = await db.findAllStaff();
    console.log("\n");
    console.table(employees);
    runPrompts();
}