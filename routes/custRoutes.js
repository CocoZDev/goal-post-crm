// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the customers
  app.get("/api/customers", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.customers.findAll({}).then(function(dbcustomers) {
      // We have access to the cals as an argument inside of the callback function
      res.json(dbcustomers);
    });
  });

  // POST route for saving a new customer
  app.post("/api/customers", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.customers.create({
      customer_id: req.body.customer_id,
      customer_contact: req.body.customer_contact,
      customer_company: req.body.customer_company,
      customer_address: req.body.customer_address,
      customer_phone: req.body.customer_phone,
      customer_email: req.body.customer_email,
      customer_rating: req.body.customer_rating,
      customer_notes: req.body.customer_notes,
      customer_visted: req.body.customer_visted,
      customer_active: req.body.customer_active,
      
    }).then(function(dbcustomers) {
      // We have access to the new cals as an argument inside of the callback function
      res.json(dbcustomers);
    })
    .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prCal it from being "thrown", which could crash our node app
      res.json(err);
    });
  });

  // DELETE route for deleting cals. We can get the id of the cals to be deleted from
  // req.params.id
  app.delete("/api/customers/:id", function(req, res) {
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
  app.put("/api/customers", function(req, res) {

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
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
      res.json(err);
    });
  });
};
