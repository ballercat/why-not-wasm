# WASM Experiments

Playing around with CPP -> WASM

## How to get the smallest useful WASM bundle?

The goal here is to build the most lightweight `.wasm` module possible that does something useful.
Emscripten while great, will add a lot of cruft to your wasm bundle if you attempt to use any
sort of standard library(see https://github.com/WebAssembly/binaryen/issues/670). It will also generate
a 2k+ line `.js` bundle to allow you to use things like `printf` from within your wasm code.

Instead you may use `ONLY_MY_CODE=1` while compiling C/++ to wasm to avoid all that... But of course this
gives up the ability to use anything useful in your C code. Or does it?

Here we experiment with building a purely number crunching wasm bundle, which will simulate a very basic
physics engine. Import it into a Browser, run it inside a webworker and hook into some simple WebGL animations.

So far only a very simple counter example build and runs on Chrome 56. Tests on Chrome Canary and Firefox nightly
fail as the binary wasm versions supported by these browsers are above that generated by `emscripten`.

## Install

* Install `emscripten`, `binaryen`.
* `npm install`
* `npm run build-object`

There is a custom dep on a wasm utils repo of mine. It's needed for stack, logger and memory operations from wasm
code. https://github.com/ballercat/wasm-utils

# Run

* `webpack-dev-server`

The current working allocates a new object on the heap and is able to print out a custom struct from the allocated
object into the JS console.

