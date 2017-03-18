/* eslint-env es6 */
import Counter from '../wasm/counter';
import strLogger from './wasm-string-log';

var memory = new WebAssembly.Memory({initial: 1});
var counter = new Counter({
  'global': {},
  'env': {
    '__Z3logPc': strLogger(memory),
    'memory': memory,
    'table': new WebAssembly.Table({initial: 0, element: 'anyfunc'})
  }
});

window.Counter = Counter;
window.counter = counter;

