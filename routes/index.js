var express = require('express');
var router = express.Router();
var user = require('../dal/user');
var profileDal = require('../dal/playerprofiles');
var userDal = require('../dal/user');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/authenticate', function(req, res) {
  if(req.session.user == undefined){
    user.GetByEmail(req.query.email, function (err, user){
      if(err){
        res.send(err);
      }
      else if (user == null) {
        res.send("User not found.");
      }
      else if (user.password != req.query.password){
        console.log("UserPassword="+user.password);
        console.log("QueryPassword="+req.query.password);
        res.send("Passwords do not match.");
      }
      else {
        req.session.user = user;
        req.session.msg = "";

        console.log("Userfname: " + user.fname);
        console.log("User.email="+user.email);

        var data = {email: user.email, fname: user.fname, lname: user.lname,
          TN: user.TN};
        res.render('user/dashboard.ejs', data);
      }
    });
  }
  else {
    res.redirect('/dashboard');
  }
});

router.get('/logout', function(req,res) {
  if(req.session.user !== undefined){
    var myuser = req.session.user;
    var data = {fname: myuser.fname};
    req.session.destroy(function(err) {
      res.render('user/logout.ejs', data);
    });
  }
  else {
    res.render('user/logout.ejs');
  }
});

router.get('/about', function(req,res) {
  if(req.session.user !== undefined){
    var myuser = req.session.user;
    var data = {fname: myuser.fname};
    res.render('about.ejs', data);
  }
  else {
    res.render('about_noauth.ejs');
  }
});

router.get('/register', function(req,res) {
  if(req.session.user !== undefined){
    req.session.msg = "You have already registered and are signed in!";
    res.redirect('/dashboard');
  }
  else {
    res.render('register.ejs');
  }
});

router.get('/saveUserAjax', function(req, res) {
  console.log(req.query);

  userDal.Insert(req.query, function(err, result) {
    if(err) {
      var responseData = {success: false, error: err.message};
      res.send(responseData);
    }
    else {
      var responseData = {success: true};
      res.send(responseData);
    }
  });
});

module.exports = router;
