const mysql = require('mysql');

const con = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"",
    port:"3306",
    database:"amazon"
})
con.connect(function(err){
    if(err){
        console.log("Connection Error");
    }
    else{
        console.log("Connection Successfully...")
    }
})

module.exports = con;