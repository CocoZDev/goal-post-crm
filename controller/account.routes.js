var express = require("express");
var passport = require("passport");
var db = require("../models");
var path = require("path");
var router = express.Router();

// Initialize Express
var app = express();

// Use morgan and body parser with our app
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

// Make public a static dir
app.use(express.static("public"));

// Database configuration with mongoose
mongoose.connect("mongodb://localhost/mongoscraper");
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});


// Routes
// ======

app.get("/api/accounts", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// ALL links in this file get prepended with /account
// ==================================================
// router.get('/api/accounts' , (req, res, next) => {
//     res.render(path.join(__dirname, "/"));
// });


router.post('/api/accounts', passport.authenticate('local', {
    successRedirect: '/customers',
    failureRedirect: '/login'
}))


router.post('/login', passport.authenticate('local-register', {
    successRedirect: '/customers',
    failureRedirect: '/login'
}))

// router.get('/logout', (req, res, next) => {
//     req.session.destroy(err => {
//       res.redirect('/login')
//     })
//   })

module.exports = router;