const pgp = require("pg-promise")();

// Define the database connection configuration
const dbConfig = {
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "admin",
  port: 5432,
};

const db = pgp(dbConfig);

module.exports = db;
