const express = require("express");
const router = express.Router();
const { db } = require("../models/Report")

// Home page route.
router.get("/", function (req, res) {
  res.send("Welcome to Report router");
});

// Get Users page route.
router.get("/get-reports", function (req, res) {
   db.any("SELECT * FROM reports")
     .then((data) => {
       res.status(200).json(data);
     })
     .catch((error) => {
       console.error("Error fetching reports:", error);
       res.status(500).json({ error: "Internal server error" });
     });
});

router.get("/get-report/:id", function (req, res) {
  const id = req.params.id;
  db.any("SELECT * FROM reports where id='" + id + "'")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.error("Error fetching report:", error);
      res.status(500).json({ error: "Internal server error" });
    });
});

router.delete("/delete-report/:id", (req, res) => {
  const id = req.params.id;
  db.any("DELETE * FROM reports where id='" + id + "'")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.error("Error deleting report:", error);
      res.status(500).json({ error: "Internal server error" });
    });
});

router.post("/new-report", function (req, res) {
   const { title, category, content, author_id, project_id } = req.body;
   db.none(
     "INSERT INTO reports(title, category, content, author_id, project_id ) VALUES($1, $2, $3, $4, $5)",
     [title, category, content, author_id, project_id ]
   )
     .then(() => {
       res.status(200).json({ message: "Report created successfully" });
     })
     .catch((error) => {
       console.error("Error creating reports:", error);
       res.status(500).json({ error: "Internal server error" });
     });
})



module.exports = router;
