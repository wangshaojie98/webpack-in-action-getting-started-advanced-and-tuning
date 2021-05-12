const arr = () => {
  console.log(111);
};

const promise = Promise.resolve("ok");
console.log(promise);

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  getX() {
    return this.x;
  }
}
let cp = new Point(25, 8);

async function sayName() {
  await Promise.resolve(3)
}
sayName()

let arr1 = [1, 2, [3, 4]]
console.log(arr1.flat())