const connection = require("./connection");

class DB {
    constructor(connection) {
        this.connection = connection;
    }
    findAllStaff() {
        return this.connection.query(
            "SELECT employee.id, employee.first_Name, employee.last_Name, role.title, department.name, AS department, role.salary, CONCAT(manager.first_Name, ' ', manager.last_Name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
        );
    };
    findAllRoles() {
        return this.connection.query(
            `SELECT role.id, role.title, role.salary, department.name AS department FROM role LEFT JOIN department ON role.department_id = department.id;`
        )
    };

}

module.exports = new DB(connection);