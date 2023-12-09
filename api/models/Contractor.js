const db = require("../database");
// Define the contractor schema
const contractorSchema = {
  contractors: {
    id: { type: "serial", primaryKey: true },
    name: { type: "string", notNull: true },
  },
};

// Create the contractor table using the schema
db.none(
  `
  CREATE TABLE IF NOT EXISTS contractors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    contact VARCHAR(250),
    contractor_code VARCHAR(250)
  )
`
)
  .then(() => {
    console.log("Contractor table created successfully.");
  })
  .catch((error) => {
    console.error("Error creating contractor table:", error);
  });

module.exports = { db, contractorSchema };
