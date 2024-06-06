interface User {
  readonly id: number;
  name: string;
  email: string;
  //   getName: () => string;
  getName(): string; // both are same;
  getCoupon(name: string, value: number): number;
}

const itsMe: User = {
  id: 12,
  name: "Utsav",
  email: "utsav@example.com",
  getName: function () {
    return this.name;
  },
  getCoupon: function (name: "utsav10", value: 12) {
    return 12;
  },
};
