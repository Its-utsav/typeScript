class User {
  username: string;
  email: string;
  readonly country: string = "India";
  constructor(username: string, email: string) {
    this.username = username;
    this.email = email;
  }
}

let userOne = new User("Utsav", "Utsav.example.com");
userOne.username = "ok";
console.log(userOne.username);
