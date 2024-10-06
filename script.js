// Assume you have a server running at http://localhost:3000
const serverBaseUrl = 'http://localhost:3000';

// Function to handle login
function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Fetch data based on username and password
  fetch(`${serverBaseUrl}/api/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (data.username) {
        // Login successful
        showTravelContainer();
        loadTravelPlans(username); // Pass the username to loadTravelPlans
      } else {
        // Login failed
        alert('Invalid username or password');
      }
    })
    .catch(error => console.error('Error during login:', error));
}

// Function to show the travel container and hide the login container
function showTravelContainer() {
  document.getElementById('login-container').style.display = 'none';
  document.getElementById('travel-container').style.display = 'block';
}

// Function to save a travel plan
function saveTravelPlan() {
  const destination = document.getElementById('destination').value;
  const date = document.getElementById('date').value;
  const user = document.getElementById('username').value;  // Replace 'your_username' with the actual username of the logged-in user

  fetch('http://localhost:3000/api/travel', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ destination, date, user }),
  })
    .then(response => response.json())
    .then(data => {
      console.log('New Travel Plan ID:', data.id);
      loadTravelPlans();
    })
    .catch(error => {
      console.error('Error saving travel plan:', error);
    });
}

function loadTravelPlans(username) {
  fetch(`${serverBaseUrl}/api/travel?user=${username}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      renderTravelPlans(data);
    })
    .catch(error => console.error('Error fetching travel plans:', error));
}


function renderTravelPlans(travelPlans) {
  const travelTable = document.getElementById('travel-table');
  travelTable.innerHTML = '';

  // Create table header
  const tableHeader = document.createElement('thead');
  tableHeader.innerHTML = '<tr><th>Destination</th><th>Date</th></tr>';
  travelTable.appendChild(tableHeader);

  // Create table body
  const tableBody = document.createElement('tbody');

  travelPlans.forEach(plan => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${plan.destination}</td><td>${plan.date}</td>`;
    tableBody.appendChild(row);
  });

  travelTable.appendChild(tableBody);
}
