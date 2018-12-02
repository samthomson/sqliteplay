const { createDB } = require('./create.js')

var db = createDB()

db.serialize(function() {
    db.run(`CREATE TABLE files (
        id INTEGER AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(32) NOT NULL,
        full_path VARCHAR(128) NOT NULL,
        date_added TIMESTAMP NOT NULL
     )`)

    db.run(`CREATE TABLE tags (
        id INTEGER AUTO_INCREMENT PRIMARY KEY,
        file_id INTEGER,
        type VARCHAR(32),
        value VARCHAR(32),
        confidence INTEGER
     )`)
   
    // var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
    // for (var i = 0; i < 10; i++) {
    //     stmt.run("Ipsum " + i);
    // }
    // stmt.finalize();
   
    // db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
    //     console.log(row.id + ": " + row.info);
    // });
  });
   
  db.close();