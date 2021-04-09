//Template engine ejs
const express = require('express');
const path = require('path');
const port = 8000;

//firing up our mongoDB sever
//this line must be before starting express server
const Obj = require('./models/obj');

//naming it app is a convention
const app = express();

//Setting up our ejs template engine
app.set('view engine','ejs');

//Setting up views
//First arguement '__dirname' is a system defined variable
//and second arguement is name of directory where views will be present.
app.set('views',path.join(__dirname,'views'));

//Adding a parser(middleware)
app.use(express.urlencoded());

//Adding static files
//static files are used for beautifying our website
app.use(express.static('assets'));

//First middleware
app.use(function(req,res,next){
    console.log("this is middleware1");
    //do something
    next();
});

//second middleware
app.use(function(req,res,next){
    console.log("this is middleware2");
    //do something
    next();
});

//Creating a new entry in database
app.get('./index/add-object',function(req,res){
    Obj.create({
        name:req.body.name,
        objId: req.body.objId
    },function(err,newObj){
        if(err){
            console.log("Error while creating a new entry.");
            return;
        }
        console.log("New Entry created.",newObj);
        return res.redirect('back');
    });
});

//Deleting an entry from database
app.get('./index/delete-object/:name',function(req,res){
    //first search object having same details as mentioned in query
    //use req.query.name for it.
    let idToBeDeleted = req.query.name;
    Obj.findByIdAndDelete(idToBeDeleted,function(err){
        if(err){
            console.log('Error while deleting an id from database.');
            return;
        }
        console.log('ID deleted');
        return res.redirect('back');
    })
});

app.listen(port,function(err){
    if(err){
        console.log("Error: While starting server.");
        return;
    }
    console.log("Server running on port ",port);
});
