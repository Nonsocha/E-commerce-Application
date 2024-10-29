// Import required modules
const express = require('express');

// Initialize Express app
const app = express();

// Define a port to listen on
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Define a simple route
app.get('/', (req, res) => {
  res.send('Welcome to the E-commerce App!');
});

// Define other routes as needed
app.get('/products', (req, res) => {
  res.send('List of products');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
