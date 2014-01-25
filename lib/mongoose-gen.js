var mongoose = require('mongoose');

var mongoosegen = function (connection) {
    "use strict";
    mongoose.connect(connection);
    var Cat = mongoose.model('Cat', { name: "string"}), kitty = new Cat({ name: 'Zildjian' });
    kitty.save(function (err) {
        if (err) {
            console.log('meow');
        }
    });
}
module.exports = mongoosegen;