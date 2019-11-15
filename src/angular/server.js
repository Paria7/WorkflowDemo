var http = require('http');
var express = require("express");
var RED = require("node-red");

//create an Express app
var app = express();

//add a simple route for static content served from 'public'
app.use("/", express.static("public"));

//create a server
var server = http.createServer(app);


//create the settings object - see default settings.js file for other options
var settings = {
    httpAdminRoot: "/red",
    httpNodeRoot: "/api",
    userDir: "/home/nol/.nodered/",
    functionGlobalContext: {}
};

//Initialise the runtime with a server and settings
RED.init(server, settings);

//serve the editor UI from /red
app.use(settings.httpAdminRoot, RED.httpAdmin);

//serve the http nodes UI from /api
app.use(settings.httpNodeRoot, RED.httpNode);

server.listen(8000);

//start the runtime
RED.start();