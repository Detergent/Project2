var express = require('express');
var router = express.Router();
var practiceSpaceDal = require('../dal/practicespaces');

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
        res.render('practicespaces/practicespaces.ejs', data);
    }
});

router.get('/loadpracticespaces', function(req, res) {
    console.log("Entered loadpracticespaces with user.email="+req.session.user.email);
    practiceSpaceDal.GetByEmail(req.session.user.email, function(err, options) {
        res.send(options);
    });
});


module.exports = router;