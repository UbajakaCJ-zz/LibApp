var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'LIBAPP' });
});

router.post('/login', function (req, res) { // Redirect to either admin or user
 if (true) {
 	res.redirect('/admin');
 } else{
 	res.redirect('/user');
 }
  
});


module.exports = router;
