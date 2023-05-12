// Import the modules required
const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// Create a new router object for handling API routes
const api_router = express.Router();

// API endpoint to get notes
api_router.get('/api/notes', async (req, res) => {
  try {
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
      // to create unique identifier for each note
      id: uuidv4(),
      title: req.body.title,
      text: req.body.text
    };
    notesJSON.push(newNote);
    fs.writeFileSync("db/db.json", JSON.stringify(notesJSON));
    res.json(newNote);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});


module.exports = api_router;