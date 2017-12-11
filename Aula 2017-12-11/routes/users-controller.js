var express = require('express');
var router = express.Router();
const passport = require('passport')


module.exports = function (usersService) {
  /* GET users listing. */
  router.get('/login', showLoginForm);
  router.post('/login', processLoginForm)
  router.post('/logout', processLogout)
  return router;

  function showLoginForm(req, res, next) {
    res.render('login');
  }

  function processLoginForm(req, res, next) {
    console.log(req.body)

    // Verify Credentials
    let username = req.body.username
    let pass = req.body.password

    let valid = usersService.verifyCredentials(username, pass, processCredentialsVerification)

    function processCredentialsVerification(err, valid, msg) {
      // If credentials are correct: Redirect user to homepage
      

      // otherwise: show login page (again) with some error message
      if (valid) {
        console.log("req.user " + req.user)
        return req.login(new User(username), processLogin)  
      }
      res.render('login', { username: username, errorMsg: msg })

      function processLogin(err) {
        console.log("processLogin cb " + err)
        if(err) return next(err)
        console.log("req.user in cb %j", req.user)
        res.redirect("/leagues/search")
      }
    }
  }
}

function processLogout(req, res, next) {
  req.logout();
  res.redirect("/users/login")
}


passport.serializeUser(function(user, done) {
  console.log("serializeUser")
    done(null, user.username)
})

passport.deserializeUser(function(userSerialized, done) {
  console.log("deserializeUser")
    done(null, new User(userSerialized))
})


function User(username) {
  this.username = username;
}


