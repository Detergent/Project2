var express = require('express');
var router = express.Router();
var userDal = require('../dal/user');
var profileDal = require('../dal/playerprofiles');

router.get('/', function(req, res, next){
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
        res.render('user/dashboard.ejs', data);
    }
});

module.exports = router;