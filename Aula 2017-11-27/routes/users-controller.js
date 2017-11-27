var express = require('express');
var router = express.Router();


module.exports = function (usersService) {
  /* GET users listing. */
  router.get('/login', showLoginForm);
  router.post('/login', processLoginForm)
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
        res.cookie("login-session", username)

        return res.redirect("/leagues/search")
      }

      res.render('login', { username: username, errorMsg: msg })
    }
  }
}


