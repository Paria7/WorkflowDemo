var gulp = require("gulp");
var fs = require('fs-extra');
var path = require('path');


gulp.task('default', function () {
    fs.copy(path.join(__dirname,'lib/@bci'), path.join(__dirname,'node_modules/@bci'));
});