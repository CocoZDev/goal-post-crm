// Dependencies
var express = require("express");

// Requiring our models
const db = require("../models");
var path = require("path");
var router = express.Router();

// route to get all the events on the calendar
router.post('/new', (req, res, next) =>{
  // find all events in the calendar table
    db.calendar.findAll({
        include:[{
            model: db.reps,
            where:{
                rep_id: req.body.repRepId
                },
            }],
    }).then(function(results){
        console.log(results);
        res.json(results);
    }).catch(err => { res.json(err)});
});

  // POST route for saving a new event
  router.post("/", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property 
    console.log("req body..calController ", req.body);
    db.calendar.create({
      // customer_id: req.body.customer_id
      event_title: req.body.event_title,
      date: req.body.date,
      start_time: req.body.start_time,
      end_time: req.body.end_time,
      note: req.body.note,
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
    db.calendar.destroy({
      where: {
        calendar_id: req.params.calendar_id
      }
    }).then(function(dbcalendar) {
      res.json(dbcalendar);
    });

  });

  // PUT route for updating cals. We can get the updated cals data from req.body
  router.put("/", function(req, res) {

    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.calendar.update({
        calendar_id: req.body.calendar_id,
        date: req.body.date,
        event_title: req.body.event_title,
        start_time: req.body.start_time,
        end_time: req.body.end_time,
        note: req.body.note
       
    }, {
      where: {
        calendar_id: req.body.calendar_id
      }
    }).then(function(dbcalendar) {
      res.json(dbcalendar);
    })
    .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node router
      res.json(err);
    });
  });
// };
module.exports = router
