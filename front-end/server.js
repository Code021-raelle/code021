const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware to parse request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// POST route for registration
app.post('/register', (req, res) => {
  // Extract form data from the request body
  const { username, email, password } = req.body;

  // Perform server-side validation
  const errors = [];

  if (!username) {
    errors.push('Username is required');
  }

  if (!email) {
    errors.push('Email is required');
  } else if (!isValidEmail(email)) {
    errors.push('Invalid email format');
  }

  if (!password) {
    errors.push('Password is required');
  } else if (!isStrongPassword(password)) {
    errors.push('Password must be at least 8 characters long and contain a combination of letters, numbers, and special characters');
  }

  // Check if there are any validation errors
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  // If validation passes, proceed with the registration process
  // ...

  // Return success response
  return res.status(200).json({ message: 'Registration successful' });
});

// Helper functions for validation
function isValidEmail(email) {
  // Implement your email validation logic here
  // For simplicity, this example only checks for a basic email format
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}

function isStrongPassword(password) {
  // Implement your password validation logic here
  // For simplicity, this example checks if the password is at least 8 characters long
  // and contains a combination of letters, numbers, and special characters
  return password.length >= 8 && /\d/.test(password) && /[a-zA-Z]/.test(password) && /[^a-zA-Z0-9]/.test(password);
}

// Start the server
const port = 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Dummy user data stored in memory (replace with your database implementation)
const registeredUsers = [
  { username: 'john', email: 'john@example.com', password: 'password123' },
  { username: 'jane', email: 'jane@example.com', password: 'password456' }
];

// Middleware to parse request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// POST route for login
app.post('/login', (req, res) => {
  // Extract login credentials from the request body
  const { username, password } = req.body;

  // Find the user in the registered users data
  const user = registeredUsers.find(user => user.username === username);

  // Check if user exists and password is correct
  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid login credentials' });
  }

  // If login is successful, return a success response or perform further actions
  return res.status(200).json({ message: 'Login successful' });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Dummy user data stored in memory (replace with your database implementation)
const registeredUsers = [
  { username: 'john', email: 'john@example.com', password: 'password123' },
  { username: 'jane', email: 'jane@example.com', password: 'password456' }
];

// Middleware to parse request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// POST route for login
app.post('/login', (req, res) => {
  // Extract login credentials from the request body
  const { username, password } = req.body;

  // Find the user in the registered users data
  const user = registeredUsers.find(user => user.username === username);

  // Check if user exists and password is correct
  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid login credentials' });
  }

  // If login is successful, redirect the user to the dashboard page
  res.redirect('/dashboard');
});

// GET route for the dashboard page
app.get('/dashboard', (req, res) => {
  // Render the dashboard page or perform any other necessary actions
  res.send('Welcome to the dashboard');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
