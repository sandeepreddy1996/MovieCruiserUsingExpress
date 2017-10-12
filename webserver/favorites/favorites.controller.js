const fs =require('fs');

const favoritesModel = require('./favorites.entity.js').favoritesEntity;

const postData = function(req,callback) {
    

    favoritesModel.insertMany(req.body, function(err, doc){
        if(err){
            //console.log(err);
            console.log(doc);
            return callback(err,{});
        }
        return callback(null, JSON.stringify(doc));
    });
    // fs.readFile("./movies.json",(err,data) =>{
        
    //     try {
    //         if (err) {
    //             throw(err);
    //         }
    //     const obj=JSON.parse(data);
    //     console.log(obj);
    //     console.log(req.body);
    //     obj['favorites'].push((req.body));
    //     console.log(obj);
        
    //     fs.writeFile("./movies.json",JSON.stringify(obj,null,3),(err) =>{
    //         if (err) {
    //             throw (err);
    //         }
    //         return false;
    //     });

    //     }
    //     catch(err){
    //         console.log("caught the error in catch block");
    //         return callback(err,{});
    //     }

    //     callback(null,{});

    // });
};

const getData = function(req,callback){

    favoritesModel.find(function(err, res) {
        if(err){
            console.log("couldnt find model");
            return callback(err, {})
        }
        else{
            console.log("result", res);
            return callback(null, JSON.stringify(res));
        }
    });
    // fs.readFile("./movies.json",(err,data) =>{
    
    //     try {
    //         if (err) {
    //             throw(err);
    //         }
    //     }
    //     catch(err){
    //         console.log("caught the error in catch block");
    //         return callback(err,{});
        
    //     }
    //     callback(null,data);

    // });
};

const deleteData = function(req,callback){

    


    favoritesModel.remove({id: req.params.id}, function(err, res){
        if(err){
            console.log(err);
            return callback(err, {});
        }
        return callback(null, res);
    })

    // let deletedMovie;

    // fs.readFile("./movies.json",(err,data) =>{
    
    //     try {
    //         if (err) {
    //             throw(err);
    //         }
    //     const obj=JSON.parse(data);
    //     console.log(req.params.id);

    //     let index= obj['favorites'].find((element) =>{
    //     return(req.params.id==element['id']);
    //     });

    //     deletedMovie = index;
     
    //     indexN =obj['favorites'].indexOf(index);

    //     obj['favorites'].splice(indexN,1);
    //     //console.log(obj);
      
    //     fs.writeFile("./movies.json",JSON.stringify(obj,null,3),(err) =>{
    //         if (err) { 
    //             throw (err);
    //         }
    //         return false;
    //     });
    // }

    // catch(err){
    //     console.log("caught the error in catch block");
    //     console.log(err);
    //     return callback(err,{});  
    // }

    // callback(null,JSON.stringify(deletedMovie));

    // });
};

const updateData= function(req,callback){



    favoritesModel.findOneAndUpdate({id: req.params.id}, {userComments: req.body.userComments}, {new: true}, function(err, res){
        if(err){
            console.log(err);
            return callback(err, {});
        }
        console.log(res);
        return callback(null, res);
    });
    
    // fs.readFile("./movies.json",(err,data) =>{        
    //     try {
    //         if (err) {
    //             throw(err);
    //         }
    //         const obj=JSON.parse(data);
            
    //         let index= obj['favorites'].find((element) =>{
    //             return(req.params.id==element['id'])
    //         });

    //         let indexN=obj['favorites'].indexOf(index);
    //         index.userComments= req.body['userComments'];
          
    //         fs.writeFile("./movies.json",JSON.stringify(obj,null,3),(err) =>{
    //             if (err) {
    //                 throw (err);
    //             }
    //             return false;
    //         });
    //     }
    //     catch(err){
    //         console.log("caught the error in catch block");
    //         console.log(err);
    //         return callback(err,{});
          
    //     }
    //     callback(null,{});
    
    // });
};
   

module.exports={
    postData: postData,
    getData: getData,
    deleteData: deleteData,
    updateData: updateData
}