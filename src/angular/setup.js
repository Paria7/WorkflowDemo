var cpx = require("cpx");
var path = require('path');
var ncp = require('ncp').ncp;
var source = path.resolve(__dirname, "lib/@bci");

var target = path.resolve(__dirname, "node_modules/@bci");
ncp(source, target, function (error) {
});
