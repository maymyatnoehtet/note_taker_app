// Import the modules required
const express = require('express');
const fs = require('fs');

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

module.exports = api_router;