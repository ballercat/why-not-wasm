#include "wasm.h"

int counter = 0;

int EMSCRIPTEN_KEEPALIVE count() {
  return counter++;
}


