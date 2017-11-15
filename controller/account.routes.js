var express = require("express");
var passport = require("passport");
var db = require("../models");
var path = require("path");
var router = express.Router();

// ALL links in this file get prepended with /account
// ==================================================
// router.get('/', (req, res, next) => {
//     res.render(path.join(__dirname, "/"));
// });


router.get('/login' , (req, res, next) => {
    res.render(path.join(__dirname, "/login"));
});


router.post('/login', passport.authenticate('local', {
    successRedirect: '/Dashboard',
    failureRedirect: '/login'
}))

router.get('/register', (req, res, next) => {
    res.render(path.join(__dirname, "/register"));
});

router.post('/register', passport.authenticate('local-register', {
    successRedirect: '/Dashboard',
    failureRedirect: '/login'
}))

router.get('/logout', (req, res, next) => {
    req.session.destroy(err => {
      res.redirect('/login')
    })
  })

module.exports = router;