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

describe("lspi multiples", function() {
  it("should be easy to set multiple records in localStorage", function() {
    lspi.sets(['test', {wow: 'wow'}], ['test2', {wow: 'wow'}])

    const testDataOne = lspi.get('test')
    const testDataTwo = lspi.get('test2')

    expect(testDataOne.wow).toBe('wow')
    expect(testDataTwo.wow).toBe('wow')
  });

  it("should be easy to get multiple records in localStorage", function() {
    lspi.sets(['test', {wow: 'wow'}], ['test2', {wow: 'wow'}])

    const testData = lspi.gets('test', 'test2')

    expect(testData[0].wow).toBe('wow')
    expect(testData[1].wow).toBe('wow')
  });
});

describe("lspi drop", function() {
  it("should drop data individually", function() {
    lspi.sets(['test', {wow: 'wow'}], ['test2', {wow: 'wow'}])

    lspi.drop('test2')

    expect(Object.keys(localStorage).length).toBe(1)
  });

  it("should drop all data without re-assigning", function() {
    lspi.sets(['test', {wow: 'wow'}], ['test2', {wow: 'wow'}])

    lspi.dropAll()

    expect(Object.keys(localStorage).length).toBe(0)
  });

  it("should drop multiple records", function() {
    lspi.sets(
      ['test', {wow: 'wow'}],
      ['test2', {wow: 'wow'}],
      ['test3', {wow: 'wow'}]
    )

    lspi.drops('test', 'test3')

    expect(Object.keys(localStorage).length).toBe(1)
    expect(lspi.get('test2')).toEqual({wow: 'wow'})
  });
});
