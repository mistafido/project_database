const db = require("../database");

// Define the project schema
const projectSchema = {
  projects: {
    id: { type: 'serial', primaryKey: true },
    name: { type: 'string', notNull: true },
    description: { type: 'text' },
    manager_id: { type: 'text', notNull: true, references: 'employees(employee_code)' },
    duration: { type: 'integer', notNull: true },
    location: { type: 'text', notNull: true },
    amount: { type: 'integer', notNull: true },
    status: { type: 'text', notNull: true }
  },
};

// Create the project table using the schema
db.none(
  `
  CREATE TABLE IF NOT EXISTS projects (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    manager_id VARCHAR(225) NOT NULL REFERENCES employees(employee_code),
    duration VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    amount INTEGER NOT NULL,
    status VARCHAR(255) NOT NULL
  )
`
)
  .then(() => {
    console.log("Project table created successfully.");
  })
  .catch((error) => {
    console.error("Error creating project table:", error);
  });

  module.exports = { db, projectSchema }