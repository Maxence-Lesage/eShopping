var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../db')
const jwt = require('jsonwebtoken');
const auth = require('../middleware');
var cookieParser = require('cookie-parser');

/* Create a new user */
router.post('/register', async function (req, res, next) {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    db.query('INSERT INTO users (email, password, username) VALUES (?, ?, ?)', [email, hashedPassword, username], (err) => {
      if (err) {
        if (err.errno === 1062) {
          res.status(409).json({ error: 'The email already exist on the server' });
          return;
        }
        res.status(500).json({ error: 'Error registering user' });
        return;
      }
      res.status(201).json({ success: 'You\'re account has been created' });
    })
  } catch (error) {
    res.status(500).json({ error: 'Error registering user' });
  }
})

/* Login */
router.post('/login', async function (req, res, next) {
  const { email, password } = req.body;
  try {
    db.query('SELECT * FROM users WHERE email = ?', [email], (err, resDB) => {
      if (err) { res.status(500).json({ error: "Error during server connection" }); return };
      if (!resDB[0].username) { res.status(401).json({ error: "Account do not exist" }); return };
      const isMatch = bcrypt.compare(password, resDB[0].password);
      if (!isMatch) { res.status(401).json({ error: "Invalid credentials" }); return };
      const token = jwt.sign({ userId: resDB[0].id }, 'Ad8r5RE41Gf4ha942R4Z', { expiresIn: '1h' });
      res.status(201).cookie('token', token, { domain: 'localhost', maxAge: 3600 * 60, httpOnly: true }).send();
    });
  } catch (error) {
    res.status(500).json({ error: "Error during server connection" })
  }
})

router.post('/protected', function (req, res, next) {
  console.log(req.body);
  console.log(req.cookies);
  console.log(req.signedCookies);
  auth(req, res, next);
})

module.exports = router;