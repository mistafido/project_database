const db = require('../database');

// Define the user schema
const userSchema = {
  users: {
    id: { type: "serial", primaryKey: true },
    username: { type: "string", notNull: true },
    password: { type: "string", notNull: true },
    email: { type: "string", notNull: true },
    role: { type: "string", notNull: true }, // You can specify user roles here
  },
};

// Create the user table using the schema
db.none(
  `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL
  )
`
)
  .then(() => {
    console.log("User table created successfully.");
  })
  .catch((error) => {
    console.error("Error creating user table:", error);
  });

// Export the database instance and user schema for use in other parts of your application
module.exports = { db, userSchema };
