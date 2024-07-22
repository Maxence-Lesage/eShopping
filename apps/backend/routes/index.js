var express = require('express');
var router = express.Router();
const db = require('../db');

/* GET home page. */
router.get('/', function (req, res, next) {
  db.query('SELECT City FROM Test', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des données.');
      return;
    }
    res.send(results);
  });
  // res.render('index', { title: req.headers['accept-language'] });
});

module.exports = router;
