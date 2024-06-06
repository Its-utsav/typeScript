// const arr: number[] = [1, 2, 3];
// const newNums: Array<number> = [1, 2, 3, 4]; // both same
const names: string[] = ["utsav", "joy", "harray", "sam"];
const isUtsavFound: string | undefined = names.find((name) => name === "utsav");
const matrixArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// const lol = [];

type User = {
  name: string;
  phoneNumber: number;
};

const allUser: User[] = []; // only add those data who follow User type structor

allUser.push({
  name: "Utsav",
  phoneNumber: 1234,
});

let tuple: [number, string, boolean] = [1, "utsav", true];
const newNums: ReadonlyArray<number> = [1, 2, 3, 4]; // only read only
const marks: number[] = [90, 45, 33, 12, 56, 75];

const passedMarks: number[] = marks.filter((mark) => mark > 50);
export {};
