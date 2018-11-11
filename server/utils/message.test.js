const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var message = generateMessage('Bill', 'This is not a message');
    expect(message.from).toBe('Bill');
    expect(message.text).toBe('This is not a message');
    expect(typeof message.createdAt).toBe('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var message = generateLocationMessage('Timmy', 42, 24);
    expect(message.from).toBe('Timmy');
    expect(message.url).toBe('https://www.google.com/maps?q=42,24');
    expect(typeof message.createdAt).toBe('number');
  });
});
