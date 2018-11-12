const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    expect(isRealString(45)).toBeFalsy();
    expect(isRealString({ objectThings: 'slkdjflsk'})).toBeFalsy();
    expect(isRealString(true)).toBeFalsy();
  });

  it('should reject strings with only spaces', () => {
    expect(isRealString('     ')).toBeFalsy();
    expect(isRealString('\t\t\t ')).toBeFalsy();
  });

  it('should accept non-empty strings', () => {
    expect(isRealString('lkasjdlfjsdf')).toBeTruthy();
    expect(isRealString('   lksjdlkfjsdlk')).toBeTruthy();
    expect(isRealString('toads\t\t\t  ')).toBeTruthy();
  });
});
