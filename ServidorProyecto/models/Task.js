var db=require('../dbconnection');

var Task={

getAllTasks:function(callback){

return db.query("Select * from tablaPrueba",callback);

},
getTaskById:function(id,callback){

    return db.query("select * from tablaPrueba where Id=?",[id],callback);
},
addTask:function(Task,callback){
   console.log("inside service");
   console.log(Task.Id);
   console.log(Task.Titulo);
   console.log(Task.ValorTotal);
return db.query("Insert into tablaPrueba(Titulo,ValorTotal) values(?,?)",[Task.Titulo, Task.ValorTotal],callback);
//return db.query("insert into task(Id,Title,Status) values(?,?,?)",[Task1.Id,Task1.Title,Task1.Status],callback);
},
deleteTask:function(id,callback){
    return db.query("delete from tablaPrueba where Id=?",[id],callback);
},
updateTask:function(id,Task,callback){
    return  db.query("Update tablaPrueba set Titulo=?,ValorTotal=? where Id=?",[Task.Titulo,Task.ValorTotal,id],callback);
},
deleteAll:function(item,callback){

var delarr=[];
   for(i=0;i<item.length;i++){

       delarr[i]=item[i].Id;
   }
   return db.query("delete from tablaPrueba where Id in (?)",[delarr],callback);
}
};
module.exports=Task;