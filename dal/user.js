var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.GetByEmail = function(email, callback) {
    var query = 'CALL User_GetByEmail(?)';
    var query_data = [email];

    connection.query(query, query_data, function(err, result){
       if(err){
           callback(err, null);
       }
        else if(result[0].length==1){
           callback(err,result[0][0]);
       }
        else {
           callback(err,null);
       }
    });
}

exports.Insert = function(newUser, callback) {
    var query = 'CALL Add_User(?,?,?,?,?)';
    var query_data = [newUser.email, newUser.password, newUser.fname, newUser.lname, newUser.TN];

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