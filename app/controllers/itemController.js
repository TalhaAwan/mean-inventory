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
                return res.status(500).json({});
            }
            else{
                return res.status(200).json({});
            }
        });
    };



    Controller.addItem = function(req, res) {
        var item = new Item(req.body);

        item.save(function(err, createdItem) {
            if(err) {
                return res.status(500).json({});
            }
            else{
                res.send(createdItem);
            
            }
        })
    };



    Controller.editItem = function(req, res) {

        Item.findOneAndUpdate({_id: req.body._id}, req.body, {"new": true}, function(err, item) {
            if(err) {
                return res.status(500).json({});
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
                return res.status(500).json({});
            }
            else if(docs.length){
                res.send(docs);
            }
            else{
                res.send([]);
            }
        }).sort('name');

    };



    return Controller;
}