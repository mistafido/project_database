const db = require('../database')

const employeeSchema = {
  employees: {
    id: { type: "serial", primaryKey: true },
    name: { type: "string", notNull: true },
    position: { type: "string", notNull: true },
    department: { type: "string", notNull: true },
    salary: { type: "integer", notNull: true },
    employee_code: { type: "string", notNull: true }
  },
};

// Create the employee table using the schema
db.none(
  `
  CREATE TABLE IF NOT EXISTS employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    position VARCHAR(255) NOT NULL,
    department VARCHAR(255) NOT NULL,
    salary INTEGER NOT NULL,
    employee_code VARCHAR(225) NOT NULL
  )
`
)
  .then(() => {
    console.log("Employee table created successfully.");
  })
  .catch((error) => {
    console.error("Error creating employee table:", error);
  });

  module.exports = { db, employeeSchema }