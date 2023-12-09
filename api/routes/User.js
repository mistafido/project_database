const express = require("express");
const router = express.Router();

const {db} = require("../models/User");

// Home page route.
router.get("/", function (req, res) {
  res.send("Welcome to user router");
});

// Get Users page route.
router.get("/get-users", function (req, res) {
   db.any("SELECT * FROM users")
     .then((data) => {
       res.status(200).json(data);
     })
     .catch((error) => {
       console.error("Error fetching users:", error);
       res.status(500).json({ error: "Internal server error" });
     });
});

//Get user by id 
router.get("/get-user/:id", function (req, res) {
  const id = req.params.id;
  db.any("SELECT * FROM users where id='" + id + "'")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.error("Error fetching user:", error);
      res.status(500).json({ error: "Internal server error" });
    });
});

//Delete user using id
router.delete("/delete-user/:id", (req, res) => {
  const id = req.params.id;
  db.any("DELETE * FROM users where id='" + id + "'")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.error("Error deleting user:", error);
      res.status(500).json({ error: "Internal server error" });
    });
});

//Create new user
router.post("/new-user", function (req, res) {
   const { username, password, email, role } = req.body;
   db.none(
     "INSERT INTO users(username, password, email, role) VALUES($1, $2, $3, $4)",
     [username, password, email, role]
   )
     .then(() => {
       res.status(200).json({ message: "User created successfully" });
     })
     .catch((error) => {
       console.error("Error creating user:", error);
       res.status(500).json({ error: "Internal server error" });
     });
})

router.post("/login", function (req, res) {
  res.send("Welcome to the Login page")
})

module.exports = router;
