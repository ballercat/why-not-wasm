/* eslint-env es6 */

(function() {
  'use strict';
  console.log('ran');

  const noop = function() {};

  const {
    Module,
    Instance,
    Memory,
    Table
  } = WebAssembly;

  const deps = {
    'global': {},
    'env': {
      'memory': new Memory({initial: 10, limit: 100}),
      'table': new Table({initial: 0, element: 'anyfunc'})
    },
  };

  const name = 'counter.wasm';

  const parse = (buffer) => {
    console.log('Building.');
    const module = new Module(buffer);
    let instance;
    try {
      instance = new Instance(module, deps);
    } catch (e) {
      instance = null;
      console.log('Failed to create WASM instance ', e);
    }
    const result = {
      module,
      instance
    };

    window.result = result;
    console.log('Done.');
  };

  console.log('Fetching...');
  fetch(`dist/${name}`)
    .then(response => response.arrayBuffer())
    .then(parse);
})();
