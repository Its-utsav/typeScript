let score: number | string = 12;
score = "11";
score = 12; // all are valid but use visily

// type User = {
//   name: string;
//   id: number;
// };

// type Admin = {
//   userName: string;
//   id: number;
// };

// let utsav: User | Admin = {
//   userName: "Utsav",
//   id: 121,
// };

// utsav = {
//   name: "utsav",
//   id: 123,
// };

function getDBdata(id: number | string) {
  // complex programming
  console.log(id);
  // id.toLowerCase(); // wont work
  if (typeof id === "string") {
    id.toLowerCase();
  } else {
    console.log(`${id} is number.`);
  }
}

getDBdata("2");
getDBdata(2);

// array
let arr: number[] = [1, 2, 3]; // "4" not allow
// let arrNumOfString: number[] = ['1', '2', 3']; // " not allow

let data: string[] | number[] = [1, 2, 3];
// here still problem array can only number or array can be string

let data1: (string | number | boolean)[] = [1, "LOL", true]; // this is far better than `:any[]`

// WTF

// let pi: 3.14 = 3.14;
// pi = 3.145;

let seatType: "aisle" | "middle" | "window";

seatType = "window";
// seatType = 'creaw'; // not allow
// console.log(seatType);

let rgb: [number, number, number] = [123, 255, 24];

type User = [number, string];

const user1: User = [1, "utsav"];

// user1[0] = "LOL"; // not allow
user1.push("lol"); // tuple limitination - not grate
export {};
