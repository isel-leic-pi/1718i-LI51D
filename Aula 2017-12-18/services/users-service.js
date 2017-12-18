


module.exports = function (dataAccess) {
    // verify id data §Access is not null or undefined and has the proper interfece

    return {
        verifyCredentials: verifyCredentials
    }



    function verifyCredentials(username, providedPass, cb) {
        // Get user password
        dataAccess.getPassword(username, processPassword)

        function processPassword(err, pass) {
            if (err) {
                return cb(err);
            }

            // verify if the password is correct
            if (pass === providedPass) {
                return cb(null, true);
            }

            cb(null, false, "Invalid username or password")
        }


    }

}


