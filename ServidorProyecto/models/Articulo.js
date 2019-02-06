var db=require('../dbconnection');

var Articulo={

getAllArticulo:function(callback){

return db.query("Select * from Articulos",callback);

},
getArticuloById:function(id,callback){

    return db.query("select * from Articulos where id=?",[id],callback);
},
addArticulo:function(Articulo,callback){
  console.log("inside service");
  console.log(Articulo.id);
  console.log(Articulo.nombreArticulo);
  console.log(Articulo.descripcion);
  console.log(Articulo.precio);
  console.log(Articulo.idEstadoArticulo);
  console.log(Articulo.idPersona);
  console.log(Articulo.idCategoria);

return db.query("Insert into Articulos(nombreArticulo,descripcion,precio,idEstadoArticulo,idPersona,idCategoria) values(?,?,?,?,?,?)",
  [Articulo.nombreArticulo, Articulo.descripcion, Articulo.precio, Articulo.idEstadoArticulo, Articulo.idPersona, Articulo.idCategoria ],callback);
//return db.query("insert into task(Id,Title,Status) values(?,?,?)",[Task1.Id,Task1.Title,Task1.Status],callback);
},
deleteArticulo:function(id,callback){
    return db.query("delete from Articulos where id=?",[id],callback);
},
updateArticulo:function(id,Articulo,callback){
    return  db.query("Update Articulos set nombreArticulo=?,descripcion=?,precio=?,idEstadoArticulo=?,idPersona=?,idCategoria=? where id=?",
      [Articulo.nombreArticulo, Articulo.descripcion, Articulo.precio, Articulo.idEstadoArticulo,Articulo.idPersona,Articulo.idCategoria,id],callback);
},
deleteAllArticulo:function(item,callback){

var delarr=[];
   for(i=0;i<item.length;i++){

       delarr[i]=item[i].Id;
   }
   return db.query("delete from Articulos where id in (?)",[delarr],callback);
}

};
module.exports=Articulo;