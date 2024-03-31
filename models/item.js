var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
    name: String,
    description: String,
    // Add more fields as needed
});

var Item = mongoose.model('Item', itemSchema);

module.exports = Item;
