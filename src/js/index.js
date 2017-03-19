/* eslint-env es6 */
import PhysicsObject from '../wasm/object';

import {
  logger,
  heap,
  stack
} from 'wasm-utils';

const noop = () => undefined;

var memory = new WebAssembly.Memory({initial: 1});
var simpleHead = heap(memory, 2048);
var simpleStack = stack();

const {logString, logNumeric} = logger(memory);

// TODO: Figure out how to fix the function names coming from emcc, other than by manually editing .wast
// The mappings are easy enough to figure out but still :/
const deps = {
  // ams2wasm is added by emcc
  'asm2wasm': {
    'f64-to-int': function(val) { return val | 0; }
  },
  'global': {},
  'env': {
    STACKTOP: simpleStack.STACKTOP,
    STACK_MAX: simpleStack.STACK_MAX,
    abortStackOverflow: simpleStack.abortStackOverflow,
    '__Znwj': heap(memory).new,
    '__Z3logPc': logString,
    '__Z3logf': logNumeric,
    'memory': memory,
    'table': new WebAssembly.Table({initial: 0, element: 'anyfunc'})
  }
};

const wasmObject = new PhysicsObject(deps);

console.log('Test creation of an object on a heap (pointer)');

const objPtr = wasmObject.exports.__Z6createv();

console.log(`Created object on heap at address: ${objPtr}`);
console.log('Calling wasm to log the position values of object (should return a heap pointer)');
const positionPtr = wasmObject.exports.__Z11getPositionP14physics_object(objPtr)
console.log(positionPtr);

// We could get at the value from JS also, but we would need to undroll the memory layout of an object
// For the above to print anything useufl we need to do that... otherwise we only get a heap pointer to
// the memory address for obj->position
const vec3PtrToObject = (uint8Ptr) => {
  const f32 = new Float32Array(memory.buffer);
  // Everything _should_ be 4 byte aligned
  const f32Ptr = uint8Ptr/4;
  return {
    x: f32[f32Ptr],
    y: f32[f32Ptr+1],
    z: f32[f32Ptr+2]
  };
};

console.log('Unrolled C++ vec3 Object Pointer: ', vec3PtrToObject(positionPtr));

