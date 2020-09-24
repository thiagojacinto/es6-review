class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  isAdmin() {
    return this.admin || false;
  }
}

class Admin extends User {
  constructor() {
    super();
    this.admin = true;
  }
}

const User1 = new User("email@test.com", "anysecretpwd");
const Adm1 = new Admin("email@test.com", "anysecretpwd");

console.log(User1.isAdmin());
console.log(Adm1.isAdmin());
