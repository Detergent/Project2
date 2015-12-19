var express = require('express');
var router = express.Router();
var availabilityDal = require('../dal/availability');

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
        res.render('availability/availability.ejs', data);
    }
});

router.get('/loadavailability', function(req, res) {
    console.log("Entered loadavailabilty with user.email="+req.session.user.email);
    availabilityDal.GetByEmail(req.session.user.email, function(err, options) {
        res.send(options);
    });
});

router.get('/edit', function(req, res) {
    var data = {start_time: req.query.start_time, end_time: req.query.end_time, fname: req.session.user.fname};
    res.render("availability/edit", data);
});
router.get('/createnew', function(req, res) {
    var data ={fname: req.session.user.fname};
    res.render("availability/createnew", data);
});

router.get('/saveedit', function(req, res) {
    var email = req.session.user.email;
    availabilityDal.Update(email, req.query, function(err, result) {
        if(err) {
            var responseData = {success: false, msg: err.message, fname: req.session.user.fname};
            res.render('availability/availability.ejs', responseData);
        }
        else {
            var responseData = {success: true, fname: req.session.user.fname};
            res.render('availability/availability.ejs', responseData);
        }
    });
});

router.get('/savenew', function(req, res) {
    var email = req.session.user.email;
    profileDal.Insert(email, req.query, function(err, result) {
        if(err) {
            var responseData = {success: false, msg: err.message, fname: req.session.user.fname};
            res.render('playerprofiles/playerprofiles.ejs', responseData);
        }
        else {
            var responseData = {success: true, fname: req.session.user.fname};
            res.render('playerprofiles/playerprofiles.ejs', responseData);
        }
    });
});

router.get('/delete', function(req, res) {
    var email = req.session.user.email;
    profileDal.Delete(email, req.query, function(err, result) {
        if(err) {
            var responseData = {success: false, msg: err.message, fname: req.session.user.fname};
            res.render('playerprofiles/playerprofiles.ejs', responseData);
        }
        else {
            var responseData = {success: true, fname: req.session.user.fname};
            res.render('playerprofiles/playerprofiles.ejs', responseData);
        }
    });
});

module.exports = router;