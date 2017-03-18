/* eslint-env es6 */
import Counter from '../wasm/counter';

var counter = new Counter();
window.Counter = Counter;
window.counter = counter.exports;

