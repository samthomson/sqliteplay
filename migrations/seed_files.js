const { createDB } = require('./../js/create.js')

var db = createDB()

db.serialize(function() {
   
    var stmt = db.prepare("INSERT INTO files (name, full_path, date_added) VALUES (?, ?, datetime())");
    for (var i = 0; i < 10; i++) {
        stmt.run(
            [
                `file_number_${i}`,
                `~/full/file/path/file_number_${i}.jpg`,
            ]
        );
    }
  });
   
  db.close();