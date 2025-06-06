const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const {Pool} = require('pg'); 
require('dotenv').config();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});
module.exports = pool;

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname , 'public' , 'index.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname , 'public' , 'contact.html'));
    });

app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname , 'public' , 'service.html'));
});
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname , 'public' , 'about.html'));
});
app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname , 'public' , 'blog.html'));
});

app.use(express.json()); // For JSON body
app.use(express.urlencoded({ extended: true })); // For form data

app.post('/contact', async (req, res) => {
  try {
    const { full_name, email, service, phone, project_details } = req.body;

    await pool.query(
      `INSERT INTO contacts (full_name, email, service, phone, project_details)
       VALUES ($1, $2, $3, $4, $5)`, 
      [full_name, email, service, phone || null, project_details]
    );

    res.status(200).json({ message: 'Contact submitted successfully!' });
  } catch (err) {
    console.error("DB Insert Error:", err); // ✅ Log full DB error
    res.status(500).json({ error: 'Failed to submit contact form' });
  }
});
console.log('DATABASE_URL:', process.env.DATABASE_URL);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});