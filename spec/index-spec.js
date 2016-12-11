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

  it("should return a string if string or data if JSON", function() {
    lspi.set('objTest', {wow: 'wow'})
    lspi.set('stringTest', 'wowow')

    const objData = lspi.get('objTest')
    const stringData = lspi.get('stringTest')

    expect(objData.wow).toBe('wow')
    expect(stringData).toBe('wowow')
  });
});
