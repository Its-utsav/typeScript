function addTwo(num: number): number {
  return num + 2;
}

function getUpper(str: string) {
  return str.toUpperCase();
}

let value = addTwo(2);
getUpper("Hello World");

function signUpUser(name: string, email: string, isPaid: boolean = false) {}

let logIn = (name: string, email: string, isPaid: boolean = false) => {};
signUpUser("Utsav", "Utsav@example.com", false);

// function getValue(val: number): boolean {
//   return val > 5 ? true : "Status code 200";
// }

let sayHello = (name: string): string => {
  return `Hello ${name}`;
};
sayHello("Utsav");
const hero = ["Iron man", "Thor", "Spidy"];

hero.map((hero: string): string => {
  return `Hero name is ${hero}`;
});

let nums = [1, 2, 3, 4, 5];

nums.map((num): string => {
  return `The numbers is ${num}`;
});

function consoleErrMSG(msg: string) {
  console.log(msg);
}
function handleError(msg: string): never {
  throw new Error(msg);
}
export {};
