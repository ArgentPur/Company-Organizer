const util = require("util");
const mysql =require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "staff"
});

connection.connect();
//connection.query allows for async/await syntax
connection.query = util.promisify(connection.query);

module.exports = connection;
