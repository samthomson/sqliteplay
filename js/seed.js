const { createDB } = require('./create.js')

var db = createDB()

db.serialize(function() {
    db.run(`CREATE TABLE IF NOT EXISTS files (
        id INTEGER AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(32) NOT NULL,
        full_path VARCHAR(128) NOT NULL,
        date_added TIMESTAMP NOT NULL
     )`)

    db.run(`CREATE TABLE IF NOT EXISTS tags (
        id INTEGER AUTO_INCREMENT PRIMARY KEY,
        file_id INTEGER,
        type VARCHAR(32),
        value VARCHAR(32),
        confidence INTEGER
     )`)
   
    var stmt = db.prepare("INSERT INTO files (name, full_path, date_added) VALUES (?, ?, datetime())");
    for (var i = 0; i < 10; i++) {
        stmt.run(
            [
                `file_number_${i}`,
                `~/full/file/path/file_number_${i}.jpg`,
            ]
        );
    }
    stmt.finalize();
   
    // db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
    //     console.log(row.id + ": " + row.info);
    // });
  });
   
  db.close();