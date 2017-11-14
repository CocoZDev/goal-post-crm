var express = require("express");
var passport = require("passport");
var db = require("../models");
var path = require("path");
var router = express.Router();

// ALL links in this file get prepended with /account
// ==================================================
router.get('/', (req, res, next) => {
    res.render(path.join(__dirname, "/"));
});

router.get('/login' , (req, res, next) => {
    res.render(path.join(__dirname, "/customers"));
});


router.post('/login', passport.authenticate('local', {
    successRedirect: '/customers',
    failureRedirect: '/login'
}))

router.post('/signup', passport.authenticate('local-register', {
    successRedirect: '/login',
    failureRedirect: '/login'
}))

router.get('/logout', (req, res, next) => {
    req.session.destroy(err => {
      res.redirect('/login')
    })
  })

module.exports = router;