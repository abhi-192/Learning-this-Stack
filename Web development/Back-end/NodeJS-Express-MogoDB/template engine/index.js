//Template engine ejs
const express = require('express');
const path = require('path');
const port = 8000;

//naming it app is a convention
const app = express();

app.listen(port,function(err){
    if(err){
        console.log("Error: While starting server.");
        return;
    }
    console.log("Server running on port ",port);
});
