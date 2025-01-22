(async () => {
    console.log(
        (
            await WebAssembly.instantiate(
                await (
                    await fetch(
                        "data:application/wasm;base64,AGFzbQEAAAABhoCAgAABYAF/AX8DgoCAgAABAASEgICAAAFwAAAFg4CAgAABAAEGgYCAgAAAB5OAgIAAAgZtZW1vcnkCAAZhZGRPbmUAAAqNgICAAAGHgICAAAAgAEEBags="
                    )
                ).arrayBuffer()
            )
        ).instance.exports.addOne(6)
    ); // 7
})()
