#ifndef _WASM_HEADER_
#define _WASM_HEADER_

/* Not a fan of importing of all of emscripten.h so using this here instead */
#ifndef EMSCRIPTEN_KEEPALIVE
  #define EMSCRIPTEN_KEEPALIVE __attribute__((used))
#endif

extern void log(char *p);

#endif // _WASM_HEADER_
