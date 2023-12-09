const express = require("express");
const router = express.Router();
const { db } = require("../models/Contractor")

// Home page route.
router.get("/", function (req, res) {
  res.send("Welcome to Contractor router");
});

// Get Users page route.
router.get("/get-contractors", function (req, res) {
   db.any("SELECT * FROM contractors")
     .then((data) => {
       res.status(200).json(data);
     })
     .catch((error) => {
       console.error("Error fetching contractors:", error);
       res.status(500).json({ error: "Internal server error" });
     });
});

router.get("/get-contractor/:id", function (req, res) {
  const id = req.params.id;
  db.any("SELECT * FROM contractors where id='" + id + "'")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.error("Error fetching contractor:", error);
      res.status(500).json({ error: "Internal server error" });
    });
});

router.delete("/delete-contractor/:id", (req, res) => {
  const id = req.params.id;
  db.any("DELETE * FROM contractors where id='" + id + "'")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.error("Error deleting contractor:", error);
      res.status(500).json({ error: "Internal server error" });
    });
});

router.post("/new-contractor", function (req, res) {
   const { name } = req.body;
   db.none(
     "INSERT INTO contractors(name) VALUES($1)",
     [name]
   )
     .then(() => {
       res.status(200).json({ message: "Contractors created successfully" });
     })
     .catch((error) => {
       console.error("Error creating contractors:", error);
       res.status(500).json({ error: "Internal server error" });
     });
})

module.exports = router;
