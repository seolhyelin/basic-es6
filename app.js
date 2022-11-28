class User {
  constructor(name) {
    this.username = name;
  }
  sayHello() {
    console.log(`hello ${this.username}`);
  }
}

// const baseObject = {
//   username: "hyelin",
//   sayHello: function () {
//     console.log("hyelin~~~~");
//   },
// };

const user = new User("lin");
console.log(user.username);
user.sayHello();
