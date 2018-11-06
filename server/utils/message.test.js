const expect = require('expect');

const {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var message = generateMessage('Bill', 'This is not a message');
    expect(message.from).toBe('Bill');
    expect(message.text).toBe('This is not a message');
    expect(typeof message.createdAt).toBe('number');
  });
});
