var mongoose = require('mongoose');
var mongoosegen = require('../lib/mongoose-gen');
var assert = require('assert');

describe('mongoose', function () {
    it('should save domain object when created', function (done) {
        mongoose.connect('localhost');
        var Cat = mongoose.model('Cat', { name: "string"}), kitty = new Cat({ name: 'Zildjian' });
        kitty.save(function (err) {
            if (err) {
                console.log('meow');
            }
            var kitty2 = null;
            Cat.findById(kitty.id, function (err, response) {
                "use strict";
                kitty2 = response;
                assert.equal(kitty.name, kitty2.name);
                done();
            });
        });

    });
    it('should save domain object via mongoose generators', function(done) {
        "use strict";
        done();
    });
});