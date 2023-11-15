// Get references to the necessary elements
const navigation = document.querySelector('.navigation');
const btnLoginPopup = document.querySelector('.btnLogin-popup');
const wrapper = document.querySelector('.wrapper');
const closeButton = document.querySelector('.icon-close');
const loginForm = document.querySelector('.form-box.login');
const registerForm = document.querySelector('.form-box.register');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});


// Function to handle the responsive behavior
function handleResponsive() {
  if (window.innerWidth < 768) {
    navigation.classList.add('responsive');
  } else {
    navigation.classList.remove('responsive');
  }
}

// Call the function initially
handleResponsive();

// Add an event listener for window resize
window.addEventListener('resize', handleResponsive);

// Function to open the login form
function openLoginForm() {
  wrapper.classList.add('active-popup');
  loginForm.classList.add('active');
}

// Function to close the popup
function closePopup() {
  wrapper.classList.remove('active-popup');
  loginForm.classList.remove('active');
  registerForm.classList.remove('active');
}

// Add click event listeners for the login button and close button
btnLoginPopup.addEventListener('click', openLoginForm);
closeButton.addEventListener('click', closePopup);

// User object with email and username properties
const users = [
  { email: 'user1@example.com', username: 'user1' },
  { email: 'user2@example.com', username: 'user2' },
  // ... other existing users
];

function registerUser(email, username) {
  // Check if email or username already exists in the users array
  const existingEmail = users.find(user => user.email === email);
  const existingUsername = users.find(user => user.username === username);

  if (existingEmail) {
    console.log('Email already exists. Please choose a different email.');
    return;
  }

  if (existingUsername) {
    console.log('Username already exists. Please choose a different username.');
    return;
  }

  // Save the user in the users array or database
  const newUser = { email, username };
  users.push(newUser);
  console.log('Registration successful!');
}

// Example usage
registerUser('newuser@example.com', 'newuser'); // Registration successful!
registerUser('user1@example.com', 'existinguser'); // Email already exists. Please choose a different email.
registerUser('newuser@example.com', 'user1'); // Username already exists. Please choose a different username.

// User object with email/username and password properties
const user = [
  { email: 'user1@example.com', password: 'password1' },
  { email: 'user2@example.com', password: 'password2' },
  // ... other users
];

function loginUser(email, password) {
  // Check if email/username exists in the users array
  const user = users.find(user => user.email === email);

  if (!user) {
    console.log('Account does not exist. Please check your email/username.');
    return;
  }

  // Check if the entered password matches the stored password
  if (user.password === password) {
    console.log('Login successful!');
    // Proceed with the login process (e.g., redirect to a dashboard)
  } else {
    console.log('Incorrect password. Please check your password.');
  }
}

// Example usage
loginUser('user1@example.com', 'password1'); // Login successful!
loginUser('user2@example.com', 'incorrectpassword'); // Incorrect password. Please check your password.
loginUser('nonexistent@example.com', 'password'); // Account does not exist. Please check your email/username.
