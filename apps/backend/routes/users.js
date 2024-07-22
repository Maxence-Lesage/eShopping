var express = require('express');
var router = express.Router();
const path = require('path');

/* GET users listing. */
router.get('/:name', function (req, res, next) {
  next(404)
  res.render('index', { title: req.params.name });
});
// const imagePath = path.join(process.cwd(), 'public', 'images', 'pasateto.jpg');
// res.sendFile(imagePath);

router.delete('/', function (req, res, next) {
  res.send('all the users has been deleted')
})

module.exports = router;
