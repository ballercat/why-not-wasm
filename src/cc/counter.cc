#include "wasm.h"

int counter = 0;
char countString[10] = "count\n";

int EMSCRIPTEN_KEEPALIVE count() {
  log(countString);
  return counter++;
}


