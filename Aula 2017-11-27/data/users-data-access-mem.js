
const users = 
    {
        jonas: "liga1718-14",
        luisao: "liga1718-1"
    }




module.exports = {
    getPassword: getPassword
}



function getPassword(username, cb) {
    cb(null, users[username])
}