/* Contains code from Week 11 Day 3 */

// Import the 'express' module
const express = require('express');

// Import the 'html_routes' module
const html_routes = require('./html-routes');

// Define the port to listen on
const PORT = process.env.PORT || 30001;

// Create an instance of the express application
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Attach the 'html_routes' middleware to the express application
app.use(html_routes);

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Start listening on the port
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);