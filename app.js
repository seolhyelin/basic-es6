class User {
  constructor(name, lastName, email, password) {
    this.username = name;
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

const user = new User("lin", "hye", "asd@com", "1234");

class Admin extends User {
  deleteWebsite() {
    console.log("deleting....");
  }
}

const admin = new Admin("lin", "hye", "asd@com", "1234");
admin.deleteWebsite();
console.log(admin.email);
