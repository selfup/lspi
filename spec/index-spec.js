localStorage = {}
const lspi = require('./../index.js')

describe("lspi makes it easy to set and get objects in localStorage", function() {
  it("contains spec with an expectation", function() {
    lspi.set('test', {wow: 'wow'})

    const handParsed = JSON.parse(localStorage.test)
    const lspiParsed = lspi.get('test')

    expect(handParsed.wow).toBe('wow')
    expect(lspiParsed.wow).toBe('wow')
  });
});
