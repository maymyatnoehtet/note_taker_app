/* Contains code from Week 11 Day 3 */

// Import the modules require
const express = require('express');
const html_routes = require('./routes/html-routes');
const api_routes = require('./routes/api-routes');


// Define the port to listen on
const PORT = process.env.PORT || 30001;

// Create an instance of the express application
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Attach the 'html_routes' middleware to the express application
app.use(html_routes);
app.use(api_routes);

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Start listening on the port
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);