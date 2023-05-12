// Import the modules required
const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// Create a new router object for handling API routes
const api_router = express.Router();

// API endpoint to get notes
api_router.get('/api/notes', async (req, res) => {
  try {
    // Read all the notes
    const notesJSON = await JSON.parse(fs.readFileSync("db/db.json","utf8"));
    res.json(notesJSON);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// API endpoint to post a new note
api_router.post('/api/notes', async (req, res) => {
  try {
    const notesJSON = await JSON.parse(fs.readFileSync("db/db.json","utf8"));
    const newNote = {
      // Create unique identifier for each note
      id: uuidv4(),
      title: req.body.title,
      text: req.body.text
    };
    // Add the new note to existing JSON notes
    notesJSON.push(newNote);
    fs.writeFileSync("db/db.json", JSON.stringify(notesJSON));
    // Show the new note
    res.json(newNote);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// API endpoint to delete a note given id
api_router.delete('/api/notes/:id', async (req, res) => {
  try {
    const notesJSON = await JSON.parse(fs.readFileSync("db/db.json", "utf8"));
    // Remove the note with given ID from the notes array
    const newNotes = notesJSON.filter((note) => { 
      return note.id !== req.params.id;
    });
    // Write the updated notes array to the file
    fs.writeFile("db/db.json", JSON.stringify(newNotes), (err) => {
      if (err) {
        throw err
      };
      res.json("Note deleted.");
    });
  } catch (err) {
    console.error(err);
    res.status(500).json("Server Error");
  }
});

module.exports = api_router;