const express = require("express");
const router = express.Router();
const {db} = require("../models/Project")

// Home page route.
router.get("/", function (req, res) {
  res.send("Welcome to Project router");
});

// Get Users page route.
router.get("/get-projects", function (req, res) {
   db.any("SELECT * FROM projects")
     .then((data) => {
       res.status(200).json(data);
     })
     .catch((error) => {
       console.error("Error fetching projects:", error);
       res.status(500).json({ error: "Internal server error" });
     });
});

router.get("/get-project/:id", function (req, res) {
  const id = req.params.id;
  db.any("SELECT * FROM projects where id='" + id + "'")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.error("Error fetching project:", error);
      res.status(500).json({ error: "Internal server error" });
    });
});

router.delete("/delete-project/:id", function (req, res) {
  const id = req.params.id;
  db.any("DELETE * FROM projects where id='" + id + "'")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.error("Error deleting project:", error);
      res.status(500).json({ error: "Internal server error" });
    });
});

router.post("/new-project", function (req, res) {
  const { name, description, manager_id, duration, location, amount, status } = req.body;
  console.log(manager_id)
   db.any(
     "INSERT INTO projects(name, description, manager_id, duration, location, amount, status) VALUES($1, $2, $3, $4, $5, $6, $7)",
     [name, description, manager_id, duration, location, amount, status]
   )
     .then(() => {
       res.status(200).json({ message: "Project created successfully" });
     })
     .catch((error) => {
       console.error("Error creating project:", error);
       res.status(500).json({ error: "Internal server error" });
     });
})

router.post("/update-project/:id", function (req, res) {
  console.log("url is visited");
  const id = req.params.id;
  const new_project = req.body
  db.any(
     "UPDATE projects SET (name, description, manager_id, duration, location, amount, status) = ($1, $2, $3, $4, $5, $6, $7) WHERE id = '" + id + "'",
      [
        new_project.name,
        new_project.description,
        new_project.manager_id,
        new_project.duration,
        new_project.location,
        new_project.amount,
        new_project.status,
      ]
  ).then(() => {
    res.status(200).json({ message: "Project updated successfully" });
    
  })
    .catch((error) => {
      console.error("Error creating project:", error);
      res.status(500).json({ error: "Internal server error" });
  })
});


module.exports = router;
