/**
 * Created by talha on 8/15/15.
 */



var mongoose       = require('mongoose');
var db = require('./config/db');

mongoose.connect(db.url);
var Item = require('../inventory/app/models/Item');
var async = require('async');
var items = require('./items.json');


console.log("Starting items seed");

async.each(items, function(itemDoc, callback) {
    var item = new Item({
        name : itemDoc.name,
        purchasePrice : 10,
        salePrice : 12,
        identifyBy : "pc",
        inStock: 10
    });

    item.save(function(err, createdItem) {
        if(err) {
            console.log(err)
            callback(err)
        }
        else{
            callback()
        }
    })

}, function(err){
    console.log("Seed ended")
    if(err){
        console.log(err);
    }
    else{
        console.log("Items seeded successfully!")
    }
})

//Item.update({}, {identifyBy: "pc"}, {multi: true}, function(err, result){
//    if(err){
//        console.log(err)
//    }
//    else{
//        console.log("success")
//    }
//})