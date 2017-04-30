/* eslint-env es6 */
import PhysicsObject from '../../wasm/object';

import {
  heap,
  stack,
  types,
  env
} from 'wasm-utils';

const deps = {
  global: {},
  env: env()
};

const vec3 = types.define({
  x: types.f32,
  y: types.f32,
  z: types.f32
});

const object = types.define({
  children: types.u32,
  total_children: types.u32,
  forces: types.u32,
  total_forces: types.u32,
  position: vec3,
  test: types.u8
});

class Physics {
  constructor() {
    this.deps = deps;
    this._wasm = new PhysicsObject(this.deps).exports;
  }

  newObject() {
    const { memory } = this.deps.env;

    const ptr = this._wasm.__Z6createv();
    const obj = object(new DataView(memory.buffer, ptr, object.size));
    obj.translate = (x, y, z) => {
      this._wasm.__Z9translateP14physics_objectfff(ptr, x, y, z);
    }

    window.uint8 = new Uint8Array(memory.buffer, ptr);
    return obj;
  }
}

export default Physics;
