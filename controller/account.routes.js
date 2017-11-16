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


// router.get('/login' , (req, res, next) => {
//     console.log("logging in..account.routes.js");
//     // res.render(path.join(__dirname, "/login"));
// });

// router.get('/dashboard', (req, res, next) => {
//     res.render(path.join(__dirname, "/dashboard"));
// });

// this is handling the authentication
router.post('/login', passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/'
}))

router.get('/register', (req, res, next) => {
    res.render(path.join(__dirname, "/register"));
});

router.post('/register', passport.authenticate('local-register', {
    successRedirect: '/login',
    failureRedirect: '/'
}))

router.get('/logout', (req, res, next) => {
    req.session.destroy(err => {
      res.redirect('/login')
    })
  })

module.exports = router;