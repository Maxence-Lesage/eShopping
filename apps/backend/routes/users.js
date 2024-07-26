var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../db')

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

module.exports = router;
