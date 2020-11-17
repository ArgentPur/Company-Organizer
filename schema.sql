CREATE DATABASE staff;

USE staff;

CREATE TABLE department (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
    
);

CREATE TABLE role (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50) UNIQUE NOT NULL,
    salary DECIMAL UNSIGNED NOT NULL,
    Index dep_ind (department_id),
    CONSTRAINT fy_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE

);

CREATE TABLE employee (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR (30) NOT NULL,
    last_name VARCHAR (30) NOT NULL,
    role_id INT UNSIGNED NOT NULL,
    Index role_ind (role_id),
    CONSTRAINT fy_role FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
    manager_id INT UNSIGNED,
    Index man_ind (man_id),
    CONSTRAINT fy_role FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
    manager_id INT UNSIGNED,
    INDEX man_ind(manager_id),
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL

);


