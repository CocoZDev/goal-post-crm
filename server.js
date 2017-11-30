var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var passport = require("passport");
var session = require('express-session');
var bcrypt = require("bcrypt-nodejs");
var path = require("path");

require('./passport.js');

// Set up the Express App
// ======================
var app = express();
var PORT = process.env.PORT || 3001;

// Requiring our models for syncing
// ================================
var db = require("./models");

// Set up the Express app to handle data parsing
// =============================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vmd.api+json"}));

// Set up session
// ==============
app.use(session({secret: "SECRET" , resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Static Directory
// ================
app.use(express.static("api"));

// Allow use of handlebars and method override
// ===========================================
// app.use(methodOverride("_method"));
// app.engine("handlebars", exphbs({defaultLayout: "main"}));
// app.set("view engine" , "handlebars");

// Routes
// ======
var index = require("./controller/index.routes");
var api = require("./controller/api.routes");
var account = require("./controller/account.routes");
var customer = require("./controller/custController");
app.use("/", index);
app.use("/api", api);
app.use("/account", account);
app.use("/customers", customer);

// Syncing our sequelize models and then starting our Express app
// =============================================================

db.sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, function(){
        console.log("App is listening on PORT " + PORT);
    });
});

module.exports = app;