interface User {
  readonly id: number;
  name: string;
  email: string;
  //   getName: () => string;
  getName(): string; // both are same;
  getCoupon(name: string, value: number): number;
}
interface User {
  // known as re opening the interface // main differnt between with type
  githubToken?: string;
}
interface Admin extends User {
  role: "admin" | "learner" | "support staff";
}
const itsMe: User = {
  id: 12,
  name: "Utsav",
  email: "utsav@example.com",
  githubToken: "1234",
  getName: function () {
    return this.name;
  },
  getCoupon: function (_name: "utsav10", _value: 12) {
    return 12;
  },
};

const utsav: Admin = {
  role: "admin",
  id: 12,
  name: "Utsav",
  email: "utsav@example.com",
  githubToken: "1234",
  getName: function () {
    return this.name;
  },
  getCoupon: function (_name: "utsav10", _value: 12) {
    return 12;
  },
};
