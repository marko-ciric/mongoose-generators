var mongoosegen = require('./lib/mongoose-gen.js');

var host = 'localhost';
var collection = '';
var port = '';

mongoosegen('mongodb://' + host + '/' + collection);