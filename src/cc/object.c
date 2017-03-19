#include "wasm.h"
#include "object.h"

physics_object* EMSCRIPTEN_KEEPALIVE createObject() {
  return new physics_object();
}

