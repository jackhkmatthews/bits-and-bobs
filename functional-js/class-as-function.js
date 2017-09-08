// class Friend {
//   constructor(friends) {
//     this.friends = friends;
//   }
//   isFriendOf(name) {
//     return this.friends.includes(name);
//   }
// }

// const buddy = new Friend(['alan', 'alonzp']);

// console.log(buddy.isFriendOf('guy'));

function Friend(friends) {
  function isFriendOf(name) {
    return friends.includes(name);
  }
  function instance(method, ...a) {
    if (method === 'isFriendOf') return isFriendOf(a);
  }
  return instance;
}

const buddy = new Friend(['alan', 'alonzp']);

console.log(buddy('isFriendOf', 'guy'));

