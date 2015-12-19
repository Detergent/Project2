var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.GetByEmail = function(user_email, callback) {
    var query_data = [user_email];
    var query = 'SELECT * FROM UserAvailability WHERE email=?';
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

exports.Update = function(email, req, callback) {
    var query = 'CALL Update_Availability(?, ?, ?, ?, ?)';
    var query_data= [email, req.old_start_time, req.old_end_time, req.start_time, req.end_time];

    console.log(query);
    console.log(query_data);

    connection.query(query, query_data, function(err, result){
        if(err){
            callback(err, null);
        }
        else {
            callback(false,result);
        }
    });

}