/* eslint-env es6 */
import PhysicsObject from '../../wasm/object';

import {
  heap,
  stack
} from 'wasm-utils';

const noop = () => undefined;

var memory = new WebAssembly.Memory({initial: 1});
const { malloc, free } = heap(memory);
var simpleStack = stack();

const deps = {
  'global': {},
  'env': {
    STACKTOP: simpleStack.STACKTOP,
    STACK_MAX: simpleStack.STACK_MAX,
    abortStackOverflow: simpleStack.abortStackOverflow,
    '__Znwj': malloc,
    '__ZdlPv': free,
    'memory': memory,
    'table': new WebAssembly.Table({initial: 0, element: 'anyfunc'})
  }
};

// console.log('Test creation of an object on a heap (pointer)');
//
// let objPtr = wasmObject.exports.__Z6createv();
//
// console.log(`Created object on heap at address (32bit word): ${objPtr >> 2}`);
// console.log('Calling wasm to log the position values of object (should return a heap pointer)');
// const positionPtr = wasmObject.exports.__Z11getPositionP14physics_object(objPtr)
// console.log(positionPtr);
//
//
// console.log('Unrolled C++ vec3 Object Pointer: ', vec3PtrToObject(positionPtr));
//
// console.log('Free memory from heap: ' , wasmObject.exports.__Z7destroyP14physics_object(objPtr));
// objPtr = wasmObject.exports.__Z6createv();
// console.log(`Created a new object at (32bit word) ${objPtr >> 2}`);

class Physics {
  constructor() {
    this._wasm = new PhysicsObject(deps).exports;
  }

  newObject() {
    const ptr = this._wasm.__Z6createv();
    return ptr;
  }
}

export default Physics;
