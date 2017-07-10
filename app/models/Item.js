/**
 * Created by talha on 8/14/15.
 */

var mongoose = require('mongoose');

module.exports = mongoose.model('Item', {
    name : {type : String, required:true},
    purchasePrice : {type : Number},
    salePrice : {type : Number},
    identifyBy : {type : String},
    inStock: {type: Number, default:0},
    category: {type: String},
    brand: {type: String}
});
