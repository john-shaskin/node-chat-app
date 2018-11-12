const _ = require('lodash');
// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

class Users {
  constructor () {
    this.users = [];
  }

  addUser(id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return
  }

  removeUser(id) {
    var removedUsers = _.remove(this.users, (user) => {
      return user.id === id;
    });

    return removedUsers[0];
  }

  getUser(id) {
    var users = this.users.filter(user => user.id === id);
    return users[0];
  }

  getUserList(room) {
    var userNames = this.users
      .filter((user) => user.room === room)
      .map((user) => user.name);
    return userNames;
  }
}

module.exports = {Users};

// class Person {
//   constructor (name, age) {
//     this.name = name;
//     this.age = age;
//   }
//
//   getUserDescription () {
//     return `${this.name} is ${this.age} year(s) old.`;
//   }
// }
//
// var me = new Person('Andrew', 55);
// console.log('this.name', me.name);
// console.log('this.age', me.age);
// console.log(me.getUserDescription());
