const lspi = require('./../dist/lspi.js');

global.localStorage = {};

beforeEach(() => {
  lspi.dropAll();
});

describe('lspi basics', () => {
  test('should be easy to set and get single records in localStorage', () => {
    lspi.set('test', { wow: 'wow' });

    const testData = lspi.get('test');

    expect(testData.wow).toBe('wow');
  });

  test('should return a string if string or data if JSON', () => {
    lspi.set('objTest', { wow: 'wow' });
    lspi.set('stringTest', 'wowow');

    const objData = lspi.get('objTest');
    const stringData = lspi.get('stringTest');

    expect(objData.wow).toBe('wow');
    expect(stringData).toBe('wowow');
  });
});

describe('lspi multiples', () => {
  test('should be easy to set multiple records in localStorage', () => {
    lspi.sets(['test', { wow: 'wow' }], ['test2', { wow: 'wow' }]);

    const testDataOne = lspi.get('test');
    const testDataTwo = lspi.get('test2');

    expect(testDataOne.wow).toBe('wow');
    expect(testDataTwo.wow).toBe('wow');
  });

  test('should be easy to get multiple records in localStorage', () => {
    lspi.sets(['test', { wow: 'wow' }], ['test2', { wow: 'wow' }]);

    const testData = lspi.gets('test', 'test2');

    expect(testData[0].wow).toBe('wow');
    expect(testData[1].wow).toBe('wow');
  });
});

describe('lspi drop', () => {
  test('should drop data individually', () => {
    lspi.sets(['test', { wow: 'wow' }], ['test2', { wow: 'wow' }]);

    lspi.drop('test2');

    console.log(Object.keys(localStorage));

    expect(Object.keys(localStorage).length).toBe(1);
  });

  test('should drop all data wtesthout re-assigning', () => {
    lspi.sets(['test', { wow: 'wow' }], ['test2', { wow: 'wow' }]);

    lspi.dropAll();

    expect(Object.keys(localStorage).length).toBe(0);
  });

  test('should drop multiple records', () => {
    lspi.sets(
      ['test', { wow: 'wow' }],
      ['test2', { wow: 'wow' }],
      ['test3', { wow: 'wow' }],
    );

    lspi.drops('test', 'test3');

    expect(Object.keys(localStorage).length).toBe(1);
    expect(lspi.get('test2')).toEqual({ wow: 'wow' });
  });
});

describe('lspi update', () => {
  test('should be able to update a single key value', () => {
    lspi.set('test1', { wow: 'wow', ok: 'ok' });

    lspi.update('test1', { ok: 'ok change' });

    expect(lspi.get('test1').ok).toBe('ok change');
  });

  test('should be able to add a key value pair to the record', () => {
    lspi.set('test1', { wow: 'wow', ok: 'ok' });

    lspi.update('test1', { omg: 'omg' });

    expect(lspi.get('test1').omg).toBe('omg');
  });
});

describe('lspi array', () => {
  test('should return all rows matching in a record', () => {
    lspi.set('test1', [
      { wow: 'wow', ok: 'ok' },
      { wow: 'wow', ok: 'lol' },
      { wow: 'nope', ok: 'okok' },
    ]);

    const found = lspi.where('test1', 'wow', 'wow');

    expect(found).toEqual([
      { wow: 'wow', ok: 'ok' },
      { wow: 'wow', ok: 'lol' },
    ]);
  });
});
