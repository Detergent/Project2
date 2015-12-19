var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.GetByEmail = function(user_email, callback) {
    var query_data = [user_email];
    var query = 'SELECT PracticeSpace.address, num_occupants, description FROM UserPracticeSpace RIGHT JOIN PracticeSpace ' +
        'ON UserPracticeSpace.address = PracticeSpace.address WHERE email=?';
    console.log("Query="+query);
    console.log("QueryData="+query_data);
    connection.query(query, query_data,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}