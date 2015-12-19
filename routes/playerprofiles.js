var express = require('express');
var router = express.Router();
var profileDal = require('../dal/playerprofiles');

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
        res.render('playerprofiles/playerprofiles.ejs', data);
    }
});

router.get('/loadprofiles', function(req, res) {
   profileDal.GetByEmail(req.session.user.email, function(err, options) {
      res.send(options);
   });
});

router.get('/edit', function(req, res) {
    var data = {instrument: req.query.instrument, equipment_level: req.query.equipment_level, favorite_genres: req.query.favorite_genres,
    years_playing: req.query.years_playing, fname: req.session.user.fname};
    res.render("playerprofiles/edit", data);
});

router.get('/createnew', function(req, res) {
    var data ={fname: req.session.user.fname};
    res.render("playerprofiles/createnew", data);
});

router.get('/saveedit', function(req, res) {
    var email = req.session.user.email;
    console.log("OLD INSTRUMENT!!!!!!!!!!!!!!!-----"+req.query.old_instrument);
    profileDal.Update(email, req.query, function(err, result) {
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