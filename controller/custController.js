// Dependencies
var express = require("express");

// Requiring our models
const db = require("../models");
var path = require("path");
var router = express.Router();

// route to get customers from a particular rep
router.get('/:id', (req, res, next) =>{
  // if(req.isAuthenticated()){
      db.customers.findAll({
          include:[{
              model: db.reps,
              where:{
                  rep_id: req.params.id
                  },
              }],
          order: db.sequelize.col('customer_company')
      }).then(function(results){
          res.json(results);
      }).catch(err => { res.json(err)});
});

  // POST route for saving a new customer
  router.post("/", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property 
    console.log("req body..custController ", req.body);
    db.customers.create({
      // customer_id: req.body.customer_id,
      customer_firstname: req.body.customer_firstname,
      customer_lastname: req.body.customer_lastname,
      customer_company: req.body.customer_company,
      customer_street: req.body.customer_street,
      customer_city: req.body.customer_city,
      customer_state: req.body.customer_state,
      customer_zipcode: req.body.customer_zipcode,
      customer_phone: req.body.customer_phone,
      customer_email: req.body.customer_email,
      // customer_rating: req.body.customer_rating,
      // customer_notes: req.body.customer_notes,
      // customer_visited: req.body.customer_visited,
      // customer_active: req.body.customer_active,
      repRepId: req.body.repRepId,
    }).then(function(response) {
      console.log("it posted", response);
      // We have access to the new cals as an argument inside of the callback function
      res.json(response);
    })
    .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prCal it from being "thrown", which could crash our node router
      res.json(err);
    });
  });

  // DELETE route for deleting cals. We can get the id of the cals to be deleted from
  // req.params.id
  router.delete("/:id", function(req, res) {
    // We just have to specify which cals we want to destroy with "where"
    db.customers.destroy({
      where: {
        customer_id: req.params.customer_id
      }
    }).then(function(dbcustomers) {
      res.json(dbcustomers);
    });
  });

  // PUT route for updating cals. We can get the updated cals data from req.body
  router.put("/", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.customers.update({
        customer_id: req.body.customer_id,
        customer_contact: req.body.customer_contact,
        customer_company: req.body.customer_company,
        customer_address: req.body.customer_address,
        customer_phone: req.body.customer_phone,
        customer_email: req.body.customer_email,
        customer_rating: req.body.customer_rating,
        customer_notes: req.body.customer_notes,
        customer_visted: req.body.customer_visted,
        customer_active: req.body.customer_active
    }, {
      where: {
        customer_id: req.body.customer_id
      }
    }).then(function(dbcustomers) {
      res.json(dbcustomers);
    })
    .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node router
      res.json(err);
    });
  });
// };
module.exports = router
