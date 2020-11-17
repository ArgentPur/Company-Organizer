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
    const {choice} = await prompt({})
};

async function viewEmployees(){
    const employees = await db.findAllStaff();
    console.log("\n");
    console.table(employees);
    runPrompts();
}