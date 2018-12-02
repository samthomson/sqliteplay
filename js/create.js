// create the db

const createDB = () => {
    var sqlite3 = require('sqlite3')
    var db = new sqlite3.Database('testDB.sqlite');
    return db
}

module.exports = {
    createDB
}