import bar from './es-module-bar.js';

function foo(invoker) {
  console.log(invoker + ' onvokes foo.js');

  bar('foo.js')
}

export default foo;