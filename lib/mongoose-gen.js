var mongoose = require('mongoose');

var mongoosegen = function(connection) {
    var cat_model = mongoose.model('Cat', { name: "string"});
}

module.exports = mongoosegen;