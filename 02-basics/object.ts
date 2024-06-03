// let User = {
//   name: "Utsav",
//   age: 18,
//   gender: "male",
// };
// function CreateUser({ username: string, isPaid: boolean }) {}

// let userTwo = { username: "Utsav", isPaid: true };
// CreateUser(userTwo);

// function CreateCourse(): { username: string; isPaid: boolean } {
//   return { username: "Utsav", isPaid: true };
// }

type User = {
  name: string;
  age: number;
  isMale: true;
};

function CreateUser(user: User): User {
  //   return { name: "", age: 0, isMale: true };
  // OR
  return user;
}

CreateUser({ name: "Utsav", age: 18, isMale: true });
