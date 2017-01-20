var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { // For login
  res.render('index', { title: 'LIBAPP' });
});

router.get('/admin', function(req, res, next) { // For admin
  res.render('admin', { title: 'LIBAPP' });
});

router.get('/user', function(req, res, next) { // For user
  res.render('user', { title: 'LIBAPP' });
});



router.post('/login', function (req, res) { // Redirect to either admin or user

	// Sign In

	const promise = auth.createUserWithEmailAndPassword(email, password);
        
    promise.catch(e => console.log(e.message));

    console.log(promise);


 if (promise.email === "ubajaka.chijioke@gmail.com" && promise.password == "ubachi2015") {
 	res.redirect('/admin');
 } else{
 	res.redirect('/user');
 }
  
});


module.exports = router;
