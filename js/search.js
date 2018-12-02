
const { createDB } = require('./create.js')

const searchByTag = (sTag) => {
    var db = createDB()


    db.serialize(function() {

        let aResults = []

        db.all(
            "SELECT files.rowid AS id, files.name, tag.type, tag.value, tag.confidence FROM files INNER JOIN tags tag ON tag.file_id = files.rowid WHERE tag.value = ?",[
                sTag
            ],
            function(err, rows) {
                if (rows) {
                    rows.forEach(function (row) {
                        console.log(row.id + ": " + row.name);
                        aResults.push({
                            id: row.id
                        })
                    })
                }
            }
        );
        return aResults
    });

    db.close();

}

module.exports = {
    searchByTag
}


console.log(searchByTag('cat'))