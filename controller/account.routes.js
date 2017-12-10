var express = require("express");
var passport = require("passport");
var db = require("../models");
var path = require("path");
var router = express.Router();

// ALL links in this file get prepended with /account
// ==================================================

// this is handling the login authentication
router.post('/login',
    passport.authenticate('local', { session: false }),
    function (req, res) {
        console.log("user authenticated..account.routes.js ", req.user.username, req.user.token);
        res.json({ username: req.user.username, token: req.user.token });
    });

    // this is handling the registration
router.post('/register', passport.authenticate('local-register', {
    successRedirect: '/login',
    failureRedirect: '/'
}));

module.exports = router;