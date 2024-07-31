// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    // return res.status(401).json({ error: 'Access denied' });
    return res.status(401).send("Access denied")
  }

  try {
    const decoded = jwt.verify(token, 'your_jwt_secret');
    req.userId = decoded.userId;
    res.status(201).send("Vous êtes connecté");
    next();
  } catch (error) {
    return res.status(400).send("Invalid token")
    // res.status(400).json({ error: 'Invalid token' });
  }
};

module.exports = auth;
