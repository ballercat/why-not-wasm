#include "wasm.h"
#include "object.h"

physics_object* EMSCRIPTEN_KEEPALIVE create() {
  physics_object* object = new physics_object();

  object->total_forces = 0;
  object->total_children = 0;

  object->position.x = 1;
  object->position.y = 1;
  object->position.z = 0;

  return object;
}

void EMSCRIPTEN_KEEPALIVE destroy(physics_object* ptr) {
  delete ptr;
}

physics_object* EMSCRIPTEN_KEEPALIVE setPosition(physics_object* obj, float x, float y, float z) {
  obj->position.x = x;
  obj->position.y = y;
  obj->position.z = z;

  return obj;
}

const vec3& EMSCRIPTEN_KEEPALIVE getPosition(physics_object* obj) {
  return obj->position;
}
