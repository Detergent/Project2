var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.GetByEmail = function(user_email, callback) {
    var query_data = [user_email];
    var query = 'SELECT description, start_time, end_time, location FROM ParticipatingIn LEFT JOIN Session ON ParticipatingIn.sessionID=Session.ID WHERE ParticipatingIn.email=?';


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

exports.GetParticipantsByEmail = function(user_email, callback) {
    var query_data = [user_email];
    var query = 'SELECT * FROM SessionParticipants WHERE SessionID = (SELECT SessionID FROM SessionParticipants WHERE Email=?)';


    console.log("Query="+query);
    console.log("QueryData="+query_data);
    connection.query(query, query_data,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            console.log(result);
            callback(false, result);
        }
    );
}