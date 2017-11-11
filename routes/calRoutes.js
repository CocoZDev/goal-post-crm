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

  // GET route for getting all of the cals
  app.get("/api/cals", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Cal.findAll({}).then(function(dbCal) {
      // We have access to the cals as an argument inside of the callback function
      res.json(dbCal);
    });
  });

  // POST route for saving a new cals
  app.post("/api/cals", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Cal.create({
      calId: req.body.calId,
      event: req.body.event,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
      note: req.body.note
      
    }).then(function(dbCal) {
      // We have access to the new cals as an argument inside of the callback function
      res.json(dbCal);
    })
    .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prCal it from being "thrown", which could crash our node app
      res.json(err);
    });
  });

  // DELETE route for deleting cals. We can get the id of the cals to be deleted from
  // req.params.id
  app.delete("/api/cals/:id", function(req, res) {
    // We just have to specify which cals we want to destroy with "where"
    db.Cal.destroy({
      where: {
        calId: req.params.calId
      }
    }).then(function(dbCal) {
      res.json(dbCal);
    });

  });

  // PUT route for updating cals. We can get the updated cals data from req.body
  app.put("/api/cals", function(req, res) {

    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Cal.update({
        calId: req.body.calId,
        event: req.body.event,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        note: req.body.note
    }, {
      where: {
        calId: req.body.calId
      }
    }).then(function(dbCal) {
      res.json(dbCal);
    })
    .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
      res.json(err);
    });
  });
};