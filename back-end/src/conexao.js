var sql = require('mssql');

var dbConfig = {
    user: 'SA',
    password: 'Superman20*',
    database: 'aper',
    server: 'localhost'
};


sql.connect(dbConfig, function (err) {
    if (err) throw (err);

    var req = new sql.Request();

    req.query('select * from Login', function (err, recordset) {
        if (err) throw err;
        else
            console.log(recordset);
    });
});