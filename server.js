var env     = require('./app/env/env'),
    routes  = require('./app/controller/routes');

env.init();
routes.init();