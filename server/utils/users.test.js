const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Torrence',
      room: 'Scam'
    },
    {
      id: '2',
      name: 'Jim',
      room: 'Something Else'
    },
    {
      id: '3',
      name: 'Rammer',
      room: 'Scam'
    }];
  });

  describe('addUser', () => {
    it('should add a new user', () => {
      var users = new Users();
      var user = {
        id: 'bipbip',
        name: 'Grungeman',
        room: 'Salad Fingers'
      };

      var resUser = users.addUser(user.id, user.name, user.room);

      expect(users.users).toEqual([user]);
    });
  });

  describe('getUserList', () => {
    it('should return user names in the same room', () => {
      var userList = users.getUserList('Scam');
      expect(userList).toEqual(['Torrence', 'Rammer']);
      userList = users.getUserList('Something Else');
      expect(userList).toEqual(['Jim']);
    })
  });

  describe('removeUser', () => {
    it('should remove a user', () => {
      var removedUser = users.removeUser('2');
      expect(removedUser.name).toBe('Jim');
      expect(users.users.length).toBe(2);
      expect(users.users.map(user => user.name))
        .toEqual(['Torrence', 'Rammer']);
    });

    it('should not remove a user that does not exist', () => {
      var removedUser = users.removeUser('023990');
      expect(removedUser).toBeFalsy();
      expect(users.users.length).toBe(3);
    });
  });

  describe('getUser', () => {
    it('should find a user that exists', () => {
      var user = users.getUser('2');
      expect(user.name).toBe('Jim');
      expect(users.users.length).toBe(3);
      expect(users.users.map(user => user.name))
        .toEqual(['Torrence', 'Jim', 'Rammer']);
    });

    it ('should not find a user that does not exist', () => {
      var user = users.getUser('09290834');
      expect(user).toBeFalsy();
      expect(users.users.length).toBe(3);
      expect(users.users.map(user => user.name))
        .toEqual(['Torrence', 'Jim', 'Rammer']);
    });
  });
});
