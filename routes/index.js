var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'LIBAPP' });
});

// router.get('/chidi', function(req, res, next) {
//   res.render('index', { title: 'Chidi' });
// });




module.exports = router;
