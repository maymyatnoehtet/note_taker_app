// Import the modules required
const express = require('express');
const path = require('path');

// Create a new router object for handling HTML routes
const html_router = express.Router();

// Define a route for the root URL
// and send the 'index.html' file to the client
html_router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/index.html'))
});

// Define a route for the '/notes' URL
// and send the 'notes.html' file to the client
html_router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/notes.html'))
});

// Export the router object
module.exports = html_router;
