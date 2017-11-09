var express = require("express");
var passport = require("passport");
var db = require("../models");
var path = require("path");
var router = express.Router();

// ALL links in this file get prepended with /account
// ==================================================
router.get('/login' , (req, res, next) => {
    res.render(path.join(__dirname, "../views/login.handlebars"));
});


router.post('/login', passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/account/login'
}))

router.post('/signup', passport.authenticate('local-register', {
    successRedirect: '/dashboard',
    failureRedirect: '/account/login'
}))

router.get('/logout', (req, res, next) => {
    req.session.destroy(err => {
      res.redirect('/account/login')
    })
  })

module.exports = router;