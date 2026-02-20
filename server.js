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

// Read - Get all notes

app.get("/notes", (req, res) => {
  res.status(200).json({
    message: "Notes fetched successfully",
    notes,
  });
});

// Read - Get a single note by ID

app.get("/notes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const note = notes.find((n) => n.id === id);

  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }

  res.json(note);
});

// Update - Update a note by ID

app.put("/notes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const note = notes.find((n) => n.id === id);

  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }

  const { title, description } = req.body;

  if (title) note.title = title;
  if (description) note.description = description;

  res.json({
    message: "Note updated successfully",
    note,
  });
});

// Delete - delete notes by id

app.delete("/notes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = notes.findIndex((n) => n.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Note not found" });
  }

  notes.splice(index, 1);

  res.json({message: "Note deleted successfully"});

});


// start server

app.listen(PORT,  () => {
    console.log(`Server running on http://localhost:${PORT}`);
    
})
