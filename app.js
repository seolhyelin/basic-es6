class User {
  constructor({ username, lastName, email, password }) {
    this.username = username;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
  sayHello() {
    console.log(`hello ${this.username}`);
  }
  getProfile() {
    console.log(`${this.username} ${this.email} ${this.password}`);
  }
  updatePassword(newPassword, currentPassword) {
    if (currentPassword === this.password) {
      this.password = newPassword;
    } else {
      console.log("can't change");
    }
  }
}

const user = new User({
  username: "lin",
  lastName: "hye",
  email: "asd@com",
  password: "1234",
});

class Admin extends User {
  constructor({ username, lastName, email, password, superAdmin, isActive }) {
    super({ username, lastName, email, password });
    this.superAdmin = superAdmin;
    this.isActive = isActive;
  }
  deleteWebsite() {
    console.log("deleting....");
  }
}

const admin = new Admin({
  username: "lin",
  lastName: "hye",
  email: "asd@com",
  password: "1234",
  superAdmin: true,
  isActive: true,
});
