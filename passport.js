var passport = require('passport');
var bcrypt = require('bcrypt-nodejs');
const LocalStrategy = require('passport-local').Strategy
var db = require('./models');
const config = require('./config');
const jwt = require('jsonwebtoken');

const authenticate = (username, password, done) =>{
    db.reps.find({
        where:{
          rep_username: username
        }
      }).then(rep => {
        if (!rep || !bcrypt.compareSync(password, rep.rep_password)) {
          console.log("failed to login, username not found.");
            return done(null, false, {message: 'invalid username/or and password combination'});
        }
        const payload = {
            sub: rep.rep_id
        };

        // create a token string
        const token = jwt.sign(payload, config.jwtSecret);
        const data = {
            username: rep.rep_username,
            token: token
        };
        return done(null, data);
      })
      .catch((err)=> done(null,err)) // pass the error back
}

const register = (req, email, password, done) => {
    //sequelize?
    db.reps.find({
        where:{
            rep_username: req.body.username,
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
        rep_username: req.body.username,
        rep_email: req.body.email,
        rep_password: bcrypt.hashSync(password)
      }).then(function(){
          done(null, user);
        })
    })
    
}

passport.use(new LocalStrategy(authenticate));
passport.use('local-register', new LocalStrategy({passReqToCallback: true}, register));

// passport.serializeUser((reps, done) => {
//     done(null, reps.rep_id)
// });

// passport.deserializeUser((id, done) => {
//     db.reps.find({
//         where:{
//             rep_id: id,
//         }
//       })
//       .then(rep => {
//           done(null, rep)
//       })
//       .catch(done)
// })
