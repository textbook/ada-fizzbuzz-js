import fizzbuzz from './fizzbuzz';

describe('fizzbuzz function', () => {
  test('it returns "1" for 1', () => {
    expect(fizzbuzz(1)).toBe("1");
  });
});
