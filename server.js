const express = require("express");
const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// Fake database
let notes = [];

// create post

app.post("/notes", (req, res) => {
    const { title, description } = req.body;


 if (!title || !description) {
    return res.status(400).json({ message: "Title and description required" });
  } 

  const newNote = {
    id: notes.length + 1,
    title,
    description,
  };

   notes.push(newNote);

    res.status(201).json({
    message: "Note created successfully",
    note: newNote,
  });
});