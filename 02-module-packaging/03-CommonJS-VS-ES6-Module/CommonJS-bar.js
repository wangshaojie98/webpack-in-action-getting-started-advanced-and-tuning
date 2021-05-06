console.log('进入到bar');
const foo = require('./CommonJS-foo.js'); // 此时foo还没完成定义，默认module.exports = {}
console.log('进入到foo引入之后');
let v = {
  foo
}
console.log('value of foo', JSON.stringify(v));
module.exports = 'This is bar.js';