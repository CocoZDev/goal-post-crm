var passport = require('passport');
var bcrypt = require('bcrypt-nodejs');
const LocalStrategy = require('passport-local').Strategy
var db = require('./models');

const authenticate = (username, password, done) =>{
    db.reps.find({
        where:{
          rep_userName: username,
        }
      }).then(rep => {
        if (!rep || !bcrypt.compareSync(password, rep.rep_password)) {
        //if (!teacher || password !== teacher.teacher_password) {
          console.log("failed to login, but sucess in getting this far.")
            return done(null, false, {message: 'invalid username/or and password combination'});
        }
        done(null, rep);
      })
      .catch(done) // pass the error back
}

const register = (req, email, password, done) => {
    //sequelize?
    db.reps.find({
        where:{
            rep_userName: req.body.username,
        }
    })
    .then(user => {
      if (user) {
        return done(null, false, { message: 'an account with that email has already been created' });
      }
      if (password !== req.body.password) {
        return done(null, false, { message: `passwords don't match` });
      }
      db.reps.create({
        rep_userName: req.body.username,
        rep_email: req.body.email,
        rep_password: bcrypt.hashSync(password)
      }).then(function(){
          done(null, user);
        })
    })
    
}

passport.use(new LocalStrategy(authenticate));
passport.use('local-register', new LocalStrategy({passReqToCallback: true}, register));

passport.serializeUser((reps, done) => {
    done(null, reps.rep_id)
});

passport.deserializeUser((id, done) => {
    db.reps.find({
        where:{
            rep_id: id,
        }
      })
      .then(rep => {
          done(null, rep)
      })
      .catch(done)
})
