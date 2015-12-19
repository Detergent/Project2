var express = require('express');
var router = express.Router();
var sessionDal = require('../dal/sessions');

router.get('/', function(req, res) {
    if(req.session.user === undefined){
        res.redirect('/');
    }
    else {
        if(req.session.msg !== "") {
            var data = {fname : req.session.user.fname, msg: req.session.msg};
            req.session.msg="";
        }
        else{
            var data = {fname : req.session.user.fname};
        }
        res.render('sessions/sessions.ejs', data);
    }
});

router.get('/loadsessions', function(req, res) {
    console.log("Entered loadsessions with user.email="+req.session.user.email);
    sessionDal.GetByEmail(req.session.user.email, function(err, options) {
        res.send(options);
    });
});

router.get('/loadsessionmembers', function(req, res) {
   sessionDal.GetParticipantsByEmail(req.session.user.email, function(err, options) {
      res.send(options);
   });
});


module.exports = router;