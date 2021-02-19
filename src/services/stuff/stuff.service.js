// Initializes the `stuff` service on path `/stuff`
const { Stuff } = require('./stuff.class');
const createModel = require('../../models/stuff.model');
const hooks = require('./stuff.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/stuff', new Stuff(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('stuff');

  service.hooks(hooks);
};
