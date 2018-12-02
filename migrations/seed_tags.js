
const { createDB } = require('./../js/create.js')

var db = createDB()

db.serialize(function() {
   
    var stmt = db.prepare("INSERT INTO tags (file_id, type, value, confidence) VALUES (?, ?, ?, ?)");
    
    db.all("SELECT rowid AS id, name FROM files", function(err, rows) {
        rows.forEach(function (row) {
            console.log(row.id + ": " + row.name);

            stmt.run(
                [
                    row.id,
                    'subject',
                    randomTag(),
                    Math.floor((Math.random() * 100) + 1)
                ]
            );

        });
        stmt.finalize();
    });
  });
   
  db.close();


  const randomTag = () => {
    const aTags = ['sky', 'person', 'landscape', 'car', 'dog', 'happy', 'cat']

    return aTags[Math.floor((Math.random() * (aTags.length - 1)) + 1)]

  }