#!/usr/bin/env python3
from wasmtime import Engine, Store, Module, Instance

engine = Engine()
module = Module.from_file(engine, "test.wasm")
store = Store(engine)
instance = Instance(store, module, [])
add_function = instance.exports(store)["add"]
print(add_function(store, 1,2))

