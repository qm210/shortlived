const users = require('./users/users.service.js');
const stuff = require('./stuff/stuff.service.js');
const basic = require('./basic/basic.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(stuff);
  app.configure(basic);
};
