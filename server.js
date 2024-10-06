const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({ 
 host: 'localhost', 
 user: 'root', 
 password: '', 
 database: 'travelplanner' 
}); 
connection.connect(err => { 
 if (err) { 
 console.error('Error connecting to MySQL:', err); 
 return; 
 } 
 console.log('Connected to MySQL'); 
}); 
module.exports = connection;

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
  connection.query(sql, [username, password], (error, results) => {
    if (error || results.length === 0) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    res.json({ username });
  });
});

app.post('/api/travel', (req, res) => {
  const { destination, date, user } = req.body;

  const sql = 'INSERT INTO travel_plans (destination, date, user) VALUES (?, ?, ?)';
  connection.query(sql, [destination, date, user], (error, results) => {
    if (error) {
      console.error('Error saving travel plan:', error);
      return res.status(500).json({ error: 'Failed to save travel plan' });
    }

    res.status(201).json({ id: results.insertId });
  });
});

app.get('/api/travel', (req, res) => {
  const { user } = req.query; // Extract user from query parameters

  const sql = 'SELECT * FROM travel_plans WHERE user = ?';
  connection.query(sql, [user], (error, results) => {
    if (error) {
      return res.status(500).json({ error: 'Failed to fetch travel plans' });
    }

    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});