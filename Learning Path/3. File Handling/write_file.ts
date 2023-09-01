// writeFile(path:string| URL, data: Uint8Array) | ReadableStream<>Uint8Array,options?:WriteFileOptions): Promise<void>
const data = await Deno.readFile('hello.txt')
await Deno.writeFile('testFile.txt', data, { append: true, mode: 0o777 })

// writeFileSync(path:string| URL, data: Uint8Array) | ReadableStream<>Uint8Array,options?:WriteFileOptions): Promise<void>
await Deno.writeFileSync('testFile.txt', data, { append: true, mode: 0o777 })

// writeTextFile(path:string| URL, data: Uint8Array) | ReadableStream<>Uint8Array,options?:WriteFileOptions): Promise<void>
const decoder = new TextDecoder('utf-8')
await Deno.writeTextFile('testFile.txt', decoder.decode(data), { append: true, mode: 0o777 })

// writeTextFileSync(path:string| URL, data: Uint8Array) | ReadableStream<>Uint8Array,options?:WriteFileOptions): Promise<void>
await Deno.writeTextFileSync('testFile.txt', decoder.decode(data), { append: true, mode: 0o777 })
