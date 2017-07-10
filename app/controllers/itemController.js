/**
 * Created by talha on 8/14/15.
 */

module.exports = function(app) {

    //var qr = require('qr-image');
    var async = require('async');
    var nodemailer = require('nodemailer');
    var mg = require('nodemailer-mailgun-transport');
    var Item = require('../models/Item');

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
                Item.find({}, function (err, docs) {
                    if(err){
                        res.send(err);
                    }
                    else if(docs.length){
                        res.send(docs);
                    }
                    else{
                        res.send([]);
                    }
                })
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


    Controller.bulkEditItems = function(req, res) {

        async.each(req.body, function(item, callback) {
            Item.findOneAndUpdate({_id: item._id}, item, function(err, item) {
                if(err) {
                    callback(err)
                }
                else{
                    callback()
                }
            })

        }, function(err){
            if(err){
                res.send(err);
            }
            else{
                Item.find({}, function (err, docs) {
                    if(err){
                        res.send(err);
                    }
                    else if(docs.length){
                        res.send(docs);
                    }
                    else{
                        res.send([]);
                    }
                })
            }
        })

    };



    Controller.searchItems = function(req, res) {
        var input = req.params.searchText;
        Item.find({name: new RegExp(input, "i")}, function(err, docs) {
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

    Controller.getItems = function(req, res) {
        Item.find({}, function (err, docs) {
            if(err){
                res.send(err);
            }
            else if(docs.length){
                res.send(docs);
            }
            else{
                res.send([]);
            }
        })
    };

    return Controller;
}