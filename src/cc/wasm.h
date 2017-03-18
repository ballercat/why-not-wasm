#ifndef _WASM_HEADER_
#define _WASM_HEADER_

/* No need to import all of emscripten */

#ifndef EMSCRIPTEN_KEEPALIVE
  #define EMSCRIPTEN_KEEPALIVE __attribute__((used))
#endif

extern void log(char *p);

#endif // _WASM_HEADER_
