import foo from './es-module-foo.js';

let invoked = false;
function bar (invoker) {
  console.log(`打印foo：${foo}`);
  if (!invoked) {
    invoked = true;
    console.log(invoker+' onvokes bar.js');

    foo('bar.js')
  }
}

export default bar;