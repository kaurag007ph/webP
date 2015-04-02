var env = require('../env/env'),
    app = env.app;

var Routes = {
    init: function() {
        app.get('*', function(req, res) {
            res.sendFile('./public/index.html');
        });
    }
};

module.exports = Routes;
