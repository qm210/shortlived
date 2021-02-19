const { Service } = require('feathers-knex');

exports.Stuff = class Stuff extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'stuff'
    });
  }
};
