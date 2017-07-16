/**
 * Created by talha on 8/14/15.
 */

var async = require('async');
var Item = require('../models/Item');
module.exports = function(app) {

    var Controller = {
        name: 'Item'
    }

    Controller.deleteItem = function(req, res) {

        Item.remove({_id: req.params.id}, function(err, result) {
            if(err) {
                console.log(err)
            }
            else{
                Item.find({}, function (err, docs) {
                    if(err){
                        res.send(err);
                    }
                    else if(docs.length > 0){
                        res.send(docs);
                    }
                    else{
                        res.send([]);
                    }
                })
            }
        });
    };



    Controller.addItem = function(req, res) {
        var item = new Item(req.body);

        item.save(function(err, createdItem) {
            if(err) {
                console.log(err)
            }
            else{
                res.send(createdItem);
            
            }
        })
    };



    Controller.editItem = function(req, res) {

        Item.findOneAndUpdate({_id: req.body._id}, req.body, {"new": true}, function(err, item) {
            if(err) {
                res.send(err);
            }
            else{
                res.send(item);
            }
        })
    };



    Controller.getItems = function(req, res) {
        var input = req.params.search;
        var query = input? {name: new RegExp(input, "i")} : {};

        Item.find(query, function(err, docs) {
            if(err){
                res.send(err);
            }
            else if(docs.length){
                res.send(docs);
            }
            else{
                res.send([]);
            }
        });

    };



    return Controller;
}