var db=require('../dbconnection');

var Login={

getAllLogin:function(callback){

return db.query("Select * from Personas",callback);

},
getLoginById:function(id,callback){

    return db.query("select * from Personas where id=?",[id],callback);
},
addLogin:function(Login,callback){
  console.log("inside service");
  console.log(Login.id);
  console.log(Login.nombreUsuario);
  console.log(Login.telefono);
  console.log(Login.numeroDepartamento);
  console.log(Login.contras);

return db.query("Insert into Personas(nombreUsuario,telefono,numeroDepartamento,contras) values(?,?,?,?)",[Login.nombreUsuario,Login.telefono,Login.numeroDepartamento,Login.contras],callback);
//return db.query("insert into task(Id,Title,Status) values(?,?,?)",[Task1.Id,Task1.Title,Task1.Status],callback);
},
deleteLogin:function(id,callback){
    return db.query("delete from Personas where id=?",[id],callback);
},
updateLogin:function(id,Login,callback){
    return  db.query("Update Personas set nombreUsuario=?,telefono=?,numeroDepartamento=?,contras=? where id=?",[Login.nombreUsuario, Login.telefono, Login.numeroDepartamento, Login.contras,id],callback);
},
deleteAllLogin:function(item,callback){

var delarr=[];
   for(i=0;i<item.length;i++){

       delarr[i]=item[i].Id;
   }
   return db.query("delete from Personas where id in (?)",[delarr],callback);
}
};
module.exports=Login;