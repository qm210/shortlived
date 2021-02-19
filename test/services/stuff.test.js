const assert = require('assert');
const app = require('../../src/app');

describe('\'stuff\' service', () => {
  it('registered the service', () => {
    const service = app.service('stuff');

    assert.ok(service, 'Registered the service');
  });
});
