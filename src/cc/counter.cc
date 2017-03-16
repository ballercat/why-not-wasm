
#ifndef EMSCRIPTEN_KEEPALIVE
  #define EMSCRIPTEN_KEEPALIVE __attribute__((used))
#endif

int counter = 0;

int EMSCRIPTEN_KEEPALIVE count() {
  return counter++;
}


