var express = require('express');
var router = express.Router();

const path = require('path')

/* GET docs page. */
router.get('/', function(req, res, next) {
  // res.sendFile(path.join(path.dirname(__dirname), 'doc', 'index.html'));
  res.render('docs/index.html');
});

module.exports = router;
