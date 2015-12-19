var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.GetByEmail = function(user_email, callback) {
    var query_data = [user_email];
    var query = 'SELECT * FROM MusicianProfile WHERE email=?';
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
    var query = 'CALL Update_Profile(?, ?, ?, ?, ?, ?)';
    var query_data= [email, req.old_instrument, req.instrument, req.years_playing, req.equipment_level, req.favorite_genres];

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

exports.Insert = function(email, req, callback) {
    var query = 'CALL New_Profile(?, ?, ?, ?, ?)';
    var query_data= [email, req.instrument, req.years_playing, req.equipment_level, req.favorite_genres];

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

exports.Delete = function(email, req, callback) {
    var query = 'CALL Delete_Profile(?, ?)';
    var query_data= [email, req.instrument];

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