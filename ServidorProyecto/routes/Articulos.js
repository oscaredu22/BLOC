var express = require('express');
var router = express.Router();
var Articulo =require('../models/Articulo');

router.get('/:id?',function(req,res,next){

if(req.params.id){

    Articulo.getArticuloById(req.params.id,function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
}
else{

 Articulo.getAllArticulo(function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
 
    });
}
});

router.post('/',function(req,res,next){

        Articulo.addArticulo(req.body,function(err,count){

            //console.log(req.body);
            if(err)
            {
                res.json(err);
            }
            else{
                    res.json(req.body);//or return count for 1 & 0
            }
        });
});

 router.post('/:id',function(req,res,next){

  Articulo.deleteAllArticulo(req.body,function(err,count){
    if(err)
    {
      res.json(err);
    }
    else
    {
      res.json(count);
    }
  });
});

router.delete('/:id',function(req,res,next){

        Articulo.deleteArticulo(req.params.id,function(err,count){

            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(count);
            }

        });
});

router.put('/:id',function(req,res,next){

    Articulo.updateArticulo(req.params.id,req.body,function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});
module.exports=router;