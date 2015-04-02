var express        = require('express'),
    app            = express(),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    CONS           = require('../constant');

var Env = {
    app: app,
    init: function() {
        app.use(bodyParser.json());
        app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(methodOverride('X-HTTP-Method-Override'));
        app.use(express.static('./public'));
        app.listen(CONS.port, function() {
            console.log('Port running on: ' + CONS.port)
        });
    }
};

module.exports = Env;