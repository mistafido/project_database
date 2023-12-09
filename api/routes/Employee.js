const express = require("express");
const router = express.Router();

const { db } = require("../models/Employee");

// Home page route.
router.get("/", function (req, res) {
  res.send("Welcome to Employee router");
});

//create new employee 
router.post("/new-employee", function (req, res) {
  const { name, position, department, salary } = req.body;
  
  db.none(
    "INSERT INTO employees(name, position, department, salary, employee_code ) VALUES($1, $2, $3, $4)",
    [name, position, department, salary]
  )
    .then(() => {
      res.status(200).json({ message: "Employee created successfully" });
    })
    .catch((error) => {
      console.error("Error creating employee:", error);
      res.status(500).json({ error: "Internal server error" });
    });
});

// About page route.
router.get("/get-employees", function (req, res) {
 db.any("SELECT * FROM employees")
   .then((data) => {
     res.status(200).json(data);
   })
   .catch((error) => {
     console.error("Error fetching employees:", error);
     res.status(500).json({ error: "Internal server error" });
   });
});

//get employee using id as parameter
router.get("/get-employee/:id", function (req, res) {
  const id = req.params.id;
  db.any("SELECT * FROM employees where id='" + id + "'")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.error("Error fetching employee:", error);
      res.status(500).json({ error: "Internal server error" });
    });
});

//get employee using department as parameter
router.get("/get-employees/:department", function (req, res) {
  const department = req.body.department;
  db.any(
    "SELECT name, position, salary, employee_code FROM employees where department = $1",
    [department]
  )
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.error("Error fetching employees:", error);
      res.status(500).json({ error: "Internal server error" });
    });
})

//get employee using project as parameter
router.get("/get-employees/:project", function (req, res) {
  console.log("url visited")
})

//update employee using id as parameter and new employee as body
router.put("/update-employee/:id", function (req, res) {
  const id = req.params.id;
  const employee_code = "emp"+gR6DN()
  const { name, position, department, salary } = req.body
  db.any(
    "UPDATE employees SET name = $1, position = $2, salary = $3, employee_code = $4, department = $5 WHERE id = $6",
    [name, position, salary, employee_code, department, id]
  )
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.error("Error updating employee", error);
      res.status(500).json({ error: "Internal server error" });
    });
  console.log({ id, name, position, department, salary, employee_code });
 

  function gR6DN() {
  // Generate a random number between 100000 and 999999
  return Math.floor(100000 + Math.random() * 900000);
}
})

//delete employee using id as parameter
router.delete("/delete-employee/:id", (req, res) => {
  const id = req.params.id;
  db.any("DELETE * FROM employees where id='" + id + "'")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.error("Error deleting employee:", error);
      res.status(500).json({ error: "Internal server error" });
    });
});

//get the reports of the employee module
router.get("/reports", function (req, res) {
  console.log("url visited")
})

module.exports = router;
