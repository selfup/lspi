localStorage = {}
const lspi = require('./../index.js')

beforeEach(function() {
  localStorage = {}
})

describe("lspi basics", function() {
  it("should be easy to set and get properties in localStorage", function() {
    lspi.set('test', {wow: 'wow'})

    const testData = lspi.get('test')

    expect(testData.wow).toBe('wow')
  });
});
