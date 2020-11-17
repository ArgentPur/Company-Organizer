use staff;

INSERT INTO department
  (name)
VALUES
  ("Production"),
  ("Research and Developement"),
  ("Administrative"),
  ("Human Resources");

INSERT INTO role
  (title, salary, department_id),

VALUES
  ("Technician", 70000, 1);
  ("Engineer", 95000, 2);
  ("CEO", 250000, 3);
  ("HR Director", 199000, 4);

INSERT INTO employee 
  (first_name, last_name, role_id, manager_id)

VALUES   
  ("Zach, Lynn", 1, 1),
  ("Mike, Flynn", 1, 1),
  ("Lynn, Smith", 2, 1),
  ("Tom, Stuart", 3, 1),
  ("Zach, Schmidt", 4, 1),    
