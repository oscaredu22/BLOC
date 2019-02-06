var mysql=require('mysql');
var connection=mysql.createPool({

host:'localhost',
user:'root',
password:'12345',
database:'baseproyecto'


});
module.exports=connection;