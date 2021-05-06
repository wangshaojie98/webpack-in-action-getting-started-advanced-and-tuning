const bar = require('./CommonJS-bar.js');

let v = {
  bar
}
console.log('value of bar', JSON.stringify(v));
module.exports = 'This is foo.js';