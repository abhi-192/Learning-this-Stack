//Creating a server using express
const express = require('express');
const port = 8000;

//naming it app is a convention
const app = express();

//GET,POST,PATCH,PUT,DELETE are mostlky used.
//use app.post() for POST and so on.
app.get('./index.html',function(req,res){
    res.send('<hi> Send HTML files here. </hi>');
});

app.listen(port,function(err){
    if(err){
        console.log("Error: While starting server.");
        return;
    }
    console.log("Server running on port ",port);
});
