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

type Point = {
  x: number;
  y: number;
};

let point1: Point = {
  x: 10,
  y: 12,
};

type Name = string;

let anyName: Name = "Utsav";

type Person = {
  name: string;
  age: number;
  isMale: boolean;
};

type Student = Person & {
  course: string;
};

let Student1: Student = {
  name: "Utsav",
  age: 18,
  isMale: true,
  course: "Bca",
};

type Id = number | string;

let userId: Id = 123;
userId = "abc123";

type Greet = (name: string) => string;

const greeting: Greet = (name) => `Hello ${name}`;

console.log(greeting("utsav"));

export {};
