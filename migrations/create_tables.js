const { createDB } = require('./../js/create.js')

var db = createDB()

db.serialize(function() {
    db.run(`CREATE TABLE IF NOT EXISTS files (
        name VARCHAR(32) NOT NULL,
        full_path VARCHAR(128) NOT NULL,
        date_added TIMESTAMP NOT NULL
     )`)

    db.run(`CREATE TABLE IF NOT EXISTS tags (
        file_id INTEGER,
        type VARCHAR(32),
        value VARCHAR(32),
        confidence INTEGER
     )`)
  });
   
  db.close();