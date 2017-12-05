// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");

// Requiring our models
const db = require("../models");
var path = require("path");
var router = express.Router();

// Routes
// =============================================================
// module.exports = function(router) {

// route to get customers from a particular rep
router.post('/', (req, res, next) => {
    // if(req.isAuthenticated()){
    console.log("req body..salesController ", req.body);
    db.sales.findAll({
        where: {
            repRepId: req.body.repRepId
        },
        order: db.sequelize.col('sale_id')
    }).then(function (results) {
        console.log(results);
        res.json(results);
    }).catch(err => { res.json(err) });
});

// // POST route for saving a new customer
router.post("/new", function (req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property 
    console.log("req body..salesController ", req.body);
    db.sales.create({
        sale_product: req.body.sale_product,
        sale_customer: req.body.sale_customer,
        sale_quantity: req.body.sale_quantity,
        sale_purchasePrice: req.body.sale_purchasePrice,
        sale_note: req.body.sale_note,
        repRepId: req.body.repRepId,
    }).then(function (response) {
        console.log("it posted", response);
        // We have access to the new cals as an argument inside of the callback function
        res.json(response);
    })
        .catch(function (err) {
            // Whenever a validation or flag fails, an error is thrown
            // We can "catch" the error to prCal it from being "thrown", which could crash our node router
            res.json(err);
        });
});

// DELETE route for deleting a sale. We can get the id of the sale to be deleted from
// req.params.id
router.delete("/:id", function (req, res) {
    // We just have to specify which cals we want to destroy with "where"
    db.sales.destroy({
        where: {
            sale_id: req.params.sale_id
        }
    }).then(function (results) {
        res.json(results);
    });

});

// PUT route for updating cals. We can get the updated cals data from req.body
// router.put("/", function (req, res) {
//     // Update takes in an object describing the properties we want to update, and
//     // we use where to describe which objects we want to update
//     db.customers.update({
//         sale_product: req.body.sale_product,
//         sale_company: req.body.sale_company,
//         sale_quantity: req.body.sale_quantity,
//         sale_purchasePrice: req.body.sale_purchasePrice,
//         sale_note: req.body.sale_note,
//         repRepId: req.body.repRepId,
//     }, {
//             where: {
//                 sale_id: req.body.sale_id
//             }
//         }).then(function (results) {
//             res.json(results);
//         })
//         .catch(function (err) {
//             // Whenever a validation or flag fails, an error is thrown
//             // We can "catch" the error to prevent it from being "thrown", which could crash our node router
//             res.json(err);
//         });
// });

module.exports = router
