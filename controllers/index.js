//Geidy Ducuara Ruiz - 200419082
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'products' });
});

/* GET ads page. */
router.get('/ads', function (req, res, next) {
    res.render('', { title: 'Classified Ad ' });
});

/* GET register page. */
router.get('/register', function (req, res, next) {
    res.render('register', { title: 'Classified Ad ' });
});


module.exports = router;
