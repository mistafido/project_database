const db = require("../database");
// Define the reports schema
const reportsSchema = {
  reports: {
    id: { type: "serial", primaryKey: true },
    title: { type: "string", notNull: true },
    category: { type: "string", notNull: true },
    content: { type: "text" },
    author_id: { type: "integer", notNull: true, references: "employees(id)" },
    project_id: { type: "integer", notNull: true, references: "projects(id)" },
  },
};

// Create the reports table using the schema
db.none(
  `
  CREATE TABLE IF NOT EXISTS reports (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    content TEXT,
    author_id INTEGER NOT NULL REFERENCES employees(id),
    project_id INTEGER NOT NULL REFERENCES projects(id)
  )
`
)
  .then(() => {
    console.log("Reports table created successfully.");
  })
  .catch((error) => {
    console.error("Error creating reports table:", error);
  });

module.exports = { db, reportsSchema };
