var mongoose = require('mongoose');

// var Schema = mongoose.Schema;

// var bookSchema = new Schema ({})

//quicker way
var bookSchema = mongoose.Schema({
    author: {
        firstname: String,
        lastname: String
    },
    title: {type: String, required: true},
    isRead: Boolean,
    yearRead: Number,
    hasAttachement: Boolean
});

//create the data
module.exports = mongoose.model('Book', bookSchema);

