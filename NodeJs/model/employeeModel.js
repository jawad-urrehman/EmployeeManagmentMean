var mongoose = require('mongoose');

var schema = mongoose.Schema({
        name:String,
        phone:String,
        department:String,
        salary:String
});

var Employee = module.exports = mongoose.model('empShema',schema);