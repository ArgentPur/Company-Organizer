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
                    value: "QUIT",
                }
            ]
        }
    ]);

    switch (choice) {
        case "VIEW_STAFF":
            return viewStaff();
        case "VIEW_STAFF_BY_DEPARTMENT":
            return viewStaffByDepartment();
        case "VIEW_STAFF_BY_MANAGER":
            return viewStaffByManager();
        case "ADD_EMPLOYEE":
            return addEmployee();
        case "REMOVE_EMPLOYEE":
            return removeEmployee();
        default:
            return quit();                    
    }
};



async function viewStaff(){
    const employees = await db.findAllStaff();
    console.log("\n");
    console.table(staff);
    runPrompts();
};

async function viewStaffByDepartment() {
    const departments = await db.findAllStaff();
    const departmentChoice = departments.map(({id, name}) => ({
        name: name,
        value: id,
    }));

    const {departmentId} = await prompt([
        {
            type: "list",
            name: "departmentId",
            message: "Select a department to view employees.",
            choices: departmentChoice,
        }
    ]);

    const staff = await db.findAllStaffByDepartment(departmentId);
    console.log("\n");
    console.table(staff);

    runPrompts();

};

async function viewStaffByManager() {
    const managers = await db.findAllStaff();
    const managerChoice = managers.map(({id, first_Name, last_Name}) => ({
        name: `${firstName} ${lastName}`,
        value: id,
    }))
    const {managerId} = await prompt([
        {
            type: "list",
            name: "managerId",
            message: "Select an employee to view information",
            choices: managerChoice
        }
    ])
    const staff = await db.findAllStaffByManager(managerId);
    console.log("\n");

    if (staff.length === 0) {
        console.log("No information available");
    }else {
        console.table(staff);
    }
    runPrompts();
};

async function removeEmployee() {
    const staff = await db.findAllStaff();
    const employeeChoice = staff.map(({id, firstName, lastName}) => ({
        name: `${firstName} ${lastName}`,
        value: id
    }));
    const {employeeId} = await prompt([
        {
            type: "list",
            name: "employeeId",
            message: "Select an employee to remove",
            choices: employeeChoice
        }
    ]);
    await db.removeEmployee(employeeId);
    console.log("Employee has been removed.");
    runPrompts();
};