/**
 * Created by talha on 8/14/15.
 */

var fs = require('fs');
var path = require('path');
module.exports = function (app) {
    app.controllers = {};
    fs.readdirSync(__dirname).forEach(function (file) {
        if (file !== "index.js") {
            var controller = require(path.join(__dirname, file))(app);
            app.controllers[controller.name] = controller;
        }
    });
};