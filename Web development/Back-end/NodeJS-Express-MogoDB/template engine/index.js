//Template engine ejs
const express = require('express');
const path = require('path');
const port = 8000;

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

//GET,POST,PATCH,PUT,DELETE are mostlky used.
//use app.post() for POST and so on.
app.get('./index',function(req,res){
    //req.body contains data sent from user side

   return res.render('./index.ejs',{
       title: "Index page title"
});
   //or just pass 'index'
   //should be same as in 'views' directory
});

app.get("./second",function(req,res){
    return res.render('./second.ejs',{
        title : "Second page title"
    });
    //return res.redirect('./index.ejs');
    //or we can use just 'back'
})

app.listen(port,function(err){
    if(err){
        console.log("Error: While starting server.");
        return;
    }
    console.log("Server running on port ",port);
});
