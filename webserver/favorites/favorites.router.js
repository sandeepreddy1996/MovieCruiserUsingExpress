const express=require("express");
const controller=require('./favorites.controller.js');
const router= express.Router();

router.post('/watchlist/:id?',(req,res) =>{
   
    controller.postData(req, (err,result) =>{
        if(err){
            res.status('500').send("cannot post to favourites");
        }
        else
            res.send(req.body);
    });
        
});

router.get('/watchlist/:id?',(req,res) =>{

    controller.getData(req, (err,result) =>{
        if(err){
            res.status('500').send("cannot get to favourites");
        }
        else
            res.json(JSON.parse(result));
    });
       
});

router.put('/watchlist/:id?',(req,res) =>{

    controller.updateData(req, (err,result) =>{
        if(err){
            res.status('500').send("cannot get to favourites");
        }
        else
            res.json(result);
    });
   
});

router.delete('/watchlist/:id?',(req,res) =>{

    controller.deleteData(req, (err,result) =>{
        if(err){
            res.status('500').send("cannot get to favourites");
        }
        else
            res.json(JSON.parse(result));
    });
    
});

module.exports=router;