var express = require("express");
var path = require("path");
var router = express.Router();
var db = require("../models");
var passport = require("passport");


router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// route to get all of a rep's customers
router.post('/dashboard', (req, res, next) => {
    // if (req.isAuthenticated()) {
        console.log("_________________________________");
        console.log("route /dashboard..index.routes.js");
        console.log("_________________________________");
        console.log('req ', req.body.repRepId);
        db.customers.findAll({
            where: {
                repRepId: req.body.repRepId
            }
            // order: db.sequelize.col('customer_company')
        }).then(function (results) {
            // console.log(results);
            res.json(results)
        });
    // } else {
    //     console.log("_________________________________");
    //     console.log("User not Authenticated..index.routes.js");
    //     console.log("_________________________________");
    //     res.redirect("/login");
    // }
});

// post to create a new product
router.post('/postProducts', (req, res, next) =>{
    console.log("_________________________________");
    console.log("creating post..index.routes.js");
    console.log("_________________________________");
    // if(req.isAuthenticated()){
        db.products.create({
            product_name: req.body.product_name,
            product_description: req.body.product_description,
            product_quantity: req.body.product_quantity,
        }).then(function(results){
            console.log("Your product was created!");
            res.json(results);
            // res.redirect('/dashboard');
        });
    // }else{
    //     res.redirect("/account/login");        
    // }
});

module.exports = router;