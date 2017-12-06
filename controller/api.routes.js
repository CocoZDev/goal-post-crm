// var express = require("express");
// var path = require("path");
// var router = express.Router();
// var db = require("../models");
// var passport = require("passport");

// PUT route for updating student points via buttons
// router.put("/points/:class/:id/:points", function(req, res) {
//         var points = parseInt(req.params.points);
//         db.students.findById(req.params.id).then( student => {
//             var score = student.student_score;
//             if (points < 0 && score > 0) {
//             return student.increment( "student_score" , {by: points});
//             }
//             if (points > 0) {
//                 return student.increment( "student_score" , {by: points});
//                 }
//         }).then(function(results){
//             res.redirect("/class/"+req.params.class);
//         });
// });

// route for updating the number of hall passes
// router.put("/hallpass/:class/:id/:passes", function(req, res) {
//     var passes = parseInt(req.params.passes);
//     db.students.findById(req.params.id).then( student => {
//         var currentPasses = student.student_hallPass;
//         if (passes > 0) {
//             return student.increment( "student_hallpass" , {by: passes}),student.increment( "student_score" , {by: 100});
//             }
//         if (passes < 0 && currentPasses > 0) {
//             return student.increment( "student_hallpass" , {by: passes}), student.increment( "student_score" , {by: -100});
//             }
//     }).then(function(results){
//         res.redirect("/class/"+req.params.class);
//     });
// });

// route for updating the number of homework passes
// router.put("/homeworkPass/:class/:id/:passes", function(req, res) {
//     var passes = parseInt(req.params.passes);
//     db.students.findById(req.params.id).then( student => {
//         var currentPasses = student.student_homeworkPass;
//         if (passes > 0) {
//             return student.increment( "student_homeworkPass" , {by: passes}), student.increment( "student_score" , {by: 100});
//             }
//         if (passes < 0 && currentPasses > 0) {
//             return student.increment( "student_homeworkPass" , {by: passes}), student.increment( "student_score" , {by: -100});
//             }
//     }).then(function(results){
//         res.redirect("/class/"+req.params.class);
//     });
// });


// // route to edit a student's info in the database
// router.put("/editStudent/:class/:id" , (req, res, done) =>{
//     if(req.isAuthenticated()){
//         console.log(res.body);
//         db.students.update({
//             // student_lastName: req.body.inputStudentLastName,
//             // student_firstName: req.body.inputStudentFirstName,
//             // student_phone: req.body.inputStudentPhone,
//             // student_email: req.body.inputStudentEmail,
//             // student_image: req.body.studentImage,
//             // student_gender: req.body.selectGender,
//             // student_gradeLevel: req.body.selectGrade,
//             student_score: req.body.inputStudentScore,
//             // student_hallPass: req.body.inputStudentHallPass,
//             // student_homeworkPass: req.body.inputStudentHwPass,
//             // student_active: req.body.active,
//             where: {
//                 studentStudentId: req.params.id
//             }
//         }).then(function(results){
//             alert("student info updated");
//         // db.schedules.create({
//         //     classClassId: req.body.classPicker,
//         //     studentStudentId: results.student_id
//         }).then(function(results2){
//             res.redirect("/dashboard")   
//     });
//     }
//     else{
//         res.redirect("account/login");
// router.put("/points/:class/:id/:points", function(req, res) {
//         var points = parseInt(req.params.points);
//         db.students.findById(req.params.id).then( student => {
//             var score = student.student_score;
//             if (points < 0 && score > 0) {
//             return student.increment( "student_score" , {by: points});
//             }
//             if (points > 0) {
//                 return student.increment( "student_score" , {by: points});
//                 }
//         }).then(function(results){
//             res.redirect("/class/"+req.params.class);
//         });
// });

// route for updating the number of hall passes
// router.put("/hallpass/:class/:id/:passes", function(req, res) {
//     var passes = parseInt(req.params.passes);
//     db.students.findById(req.params.id).then( student => {
//         var currentPasses = student.student_hallPass;
//         if (passes > 0) {
//             return student.increment( "student_hallpass" , {by: passes}),student.increment( "student_score" , {by: 100});
//             }
//         if (passes < 0 && currentPasses > 0) {
//             return student.increment( "student_hallpass" , {by: passes}), student.increment( "student_score" , {by: -100});
//             }
//     }).then(function(results){
//         res.redirect("/class/"+req.params.class);
//     });
// });

// route for updating the number of homework passes
// router.put("/homeworkPass/:class/:id/:passes", function(req, res) {
//     var passes = parseInt(req.params.passes);
//     db.students.findById(req.params.id).then( student => {
//         var currentPasses = student.student_homeworkPass;
//         if (passes > 0) {
//             return student.increment( "student_homeworkPass" , {by: passes}), student.increment( "student_score" , {by: 100});
//             }
//         if (passes < 0 && currentPasses > 0) {
//             return student.increment( "student_homeworkPass" , {by: passes}), student.increment( "student_score" , {by: -100});
//             }
//     }).then(function(results){
//         res.redirect("/class/"+req.params.class);
//     });
// });


// // route to edit a student's info in the database
// router.put("/editStudent/:class/:id" , (req, res, done) =>{
//     if(req.isAuthenticated()){
//         console.log(res.body);
//         db.students.update({
//             // student_lastName: req.body.inputStudentLastName,
//             // student_firstName: req.body.inputStudentFirstName,
//             // student_phone: req.body.inputStudentPhone,
//             // student_email: req.body.inputStudentEmail,
//             // student_image: req.body.studentImage,
//             // student_gender: req.body.selectGender,
//             // student_gradeLevel: req.body.selectGrade,
//             student_score: req.body.inputStudentScore,
//             // student_hallPass: req.body.inputStudentHallPass,
//             // student_homeworkPass: req.body.inputStudentHwPass,
//             // student_active: req.body.active,
//             where: {
//                 studentStudentId: req.params.id
//             }
//         }).then(function(results){
//             alert("student info updated");
//         // db.schedules.create({
//         //     classClassId: req.body.classPicker,
//         //     studentStudentId: results.student_id
//         }).then(function(results2){
//             res.redirect("/dashboard")   
//     });
//     }
//     else{
//         res.redirect("account/login");
//     }
// })

// module.exports = router;