//Without using express
//Creating a server With only node

const http = require('http');
const port = 8000;
const fs = require('fs');

function requestHandler(request,response){
   // console.log(request.url);
   //200 is status code for OK
    response.writeHead(200,{'content type' : 'text/html'});

    //writing to response
    //response.end('<h1>HTML File/code will be inserted here.</h1>');

    //using file system to write response
    fs.readFile('./index.html',function(err,data){
        if(err){
            console.log("Error occured : while reading file");
            return response.end("<h1> ERROR </h1>");
        }
        //return response to browser
        return response.end(data);
    });

    //By reading response and using 'respose.url' we can check
    //what page the user wants(through if-else or switch) to
    //access and provide different responses(diff HTML files or diff data) corresponding to each.
}

const server = http.createServer();

server.listen(port,function(err){
    if(err){
        console.log("Error ocuured: While creating server");
        return;
    }
    console.log("Server running on ",port);
});
