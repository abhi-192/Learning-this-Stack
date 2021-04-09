//Creating a server using express
const express = require('express');
const port = 8000;

//naming it app is a convention
const app = express();

//GET,POST,PATCH,PUT,DELETE are mostlky used.
//use app.post() for POST and so on.

app.get('./index.html',function(req,res){
    //send html files through this
    res.send('<hi> Even HTML files can be sent from here ,not only plain text .Send HTML files here. </hi>');
});

app.listen(port,function(err){
    if(err){
        console.log("Error: While starting server.");
        return;
    }
    console.log("Server running on port ",port);
});
