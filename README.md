# Deno
![Screenshot]()

<p align="center">
  <a href="https://nodejs.org/">
    <img src="https://raw.githubusercontent.com/msjadhav03/deno-learn/blob/main/deno-looking-up.svg" alt="Deno Logo" height="140">
  </a>
</p>

1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation on Ubuntu](#installation)
4. [Visual Studio Setup for Deno](#setup)
5. [Hello World](#helloworld)
6. [Running Hosted File](#runninghostedfile)
7. [Deno vs Node.js](difference)
8. [ Web API - fetch - Make HTTP Request](#makinghttprequest)
9. [ Web API - Blob ](#webapiblob)
10. [Read File](#readfile)
11. [Write File](#writefile)
12. [import/export](#importexport)
13. [import map](#importmap)
14. [serve](#serve)
15. [listenAndServe](#listenAndServe)
16. [Handling Request](#handlingRequest)
17. [Routing](#routing)

# ✔️ Introduction
- JavaScript, TypeScript and WebAssembly runtime with secure defaults
- Built on V8, Rust and Tokio 
- Aims to be productive and secure scripting environment for the modern programmer
- Ships 🚢️ single executable 👩‍🔧️
- Secure defaults 💪️
- Browser compatibility 🤘️
- Server 🗄️ HTTP efficiently

# ✔️ Features 
- Provides web platform functionality
- adopts web plaform standards
- Secure (No file,network, or environment access unless explicitly enabled)
- Supports typescript
- ships single executable
- Built in development tooling like `deno fmt`, a linter `deno lint` a test runner `deno test`
- Standard Modules
- Support for NPM modules

# ✔️ Installation on ubuntu
-  Download Deno
```JS
curl -fsSL https://deno.land/x/install/install.sh | sh
```
- Append Environment Variables
```js
export DENO_INSTALL="/home/your-username/.deno"
export PATH="$DENO_INSTALL/bin:$DENO_PATH"
```
### or
```js
sudo snap install deno
```

# Visula Studio Setup for Deno
- Install extension named `deno` by denoland (useful for formatting et.cetera)
- Append visual studio code `setting.json`
```json
{
    "deno.enable": true,
    "deno.lint": true,
}
```
# Hello World
`helloworld.ts`
```ts
console.log('Welcome to Deno!!!')
```
### running deno
1. create `deno.json` add below content 
```json
{
    "permissions": {
        "read": [
           "/path/to/your/directory"
        ]
    }
}
```
2. Executing File `helloworld.ts`
```js
deno run --allow-all helloworld.ts 
// or
deno run --allow-read helloworld.ts
```
3. `--allow-all` : permission flag - allows script to use all permissions

# Running Hosted file with `deno run`
```ts
deno run https://deno.land/std@0.198.0/examples/curl.ts https://deno.com
```
- First it will download the file and will cache it. After that it will run the file. 
`Note - After running file you will need to provide permission by entering 'y'`

# Deno vs Node
||Deno|Node|
|---|---|---|
|Engine|V8|V8|
|Host Language|Rust|C++|
|Module Syntax|ESM|CommonJS|
|APIS|Deno global + WEB APIs + standard Library|Built in Modules|
|Typescript|Out of the box|config|
|Top Level Async Await|y]Yes|No|
|Package Manager|No (import via URL)|npm|

# Web API - fetch - Make HTTP Request
`app.ts`
```ts
const res = await fetch("https://deno.com");
const body = await res.text();
console.log(body);
```
- running file
```ts
deno run --allow-net app.ts
```
- `--allow-net` - Providing network permission

# Web API - Blob 
- Blob represents raw binary data
- Used for handling and working with large amount of data in web application
- BLOB - Binary Large Object
```ts
const blob = new Blob([new Uint8Array[5,10]])
console.log(blob)

```

# Read File
- `readFile(path : string | URL, options?:ReadFileOptions) : Promise<Uint8Array>` - resolves the entire content of a file as as an array of bytes, `TextDecoder` can be used to convert bytes to string
```ts
const decoder = new TextDecoder('utf-8');
const data = await readFile('hello.txt');
console.log(decoder.decode(data));
```
-  `readFileSync(path : string|URL): Promise<Uint8Array>`
```ts
const decoder = new TextDecoder('utf-8')
const data = await Deno.readFileSync('hello.txt')
console.log(decoder.decode(data))
```
- `readTextFile` - Asynchronously reads and returs data utf-8 decoded string format
```ts
const data = await Deno.readTextFile('hello.txt')
console.log(data)
```
- `readTextFileSync` - Reads data Synchronously and returns data in utf-8 decoded string format
```ts
const data = await Deno.readTextFileSync('hello.txt')
console.log(data)
```
- `Note : Requires permission --allow-read`

# Write File
- `writeFile(path:string| URL, data: Uint8Array) | ReadableStream<>Uint8Array,options?:WriteFileOptions): Promise<void>` - write and create file if need else overwriting
```ts
const data = await Deno.readFile('hello.txt')
await Deno.writeFile('testFile.txt',data,{mode:0o777})
```
Data to be written is in Uint8Array format, so no encoding has been done.
- `writeFileSync(path:string| URL, data: Uint8Array) | ReadableStream<>Uint8Array,options?:WriteFileOptions): Promise<void>`
```ts
const data = await Deno.readTextFile('hello.txt')
const decoder = new TextDeocder()
await Deno.writeFileSync('test.txt',decoder.encode(data),{append : true})
```
Data is in text format. But `writeFileSync` need input data in Uint8Array format to write.

- `writeTextFile(path:string| URL, data: Uint8Array) | ReadableStream<>Uint8Array,options?:WriteFileOptions): Promise<void>`
```ts
const data = await Deno.readTextFile('hello.txt')
const decoder = new TextDeocder()
await Deno.writeTextFile('test.txt',data,{append : true})
```
data is in text format and need to write text file, no encoding or decoding done

- `writeTextFileSync(path:string| URL, data: Uint8Array) | ReadableStream<>Uint8Array,options?:WriteFileOptions): Promise<void>`
```ts
const data = await Deno.readFile('hello.txt')
const decoder = new TextDeocder('utf-8')
await Deno.writeTextFileSync('test.txt',decoder.decode(data),{append : true})
```
Data is in Uint8Array format. So before writting it using `writeTextFileSync` data has been decode in utf-8 decoded string.
- `Note : Requires permission --allow-read, --allow-write`

# import/export
- `export`
```ts
export function logger(data: string) {
    console.log(data)
}
export const ApplicationName = "Deno App"
```
- `export default`
```ts
export default function sum(a: number, b: number) {
    return a + b
}
```
- `import`
```ts
import * as uuid from 'uuid/mod.ts'
import { ApplicationName, logger } from './utils.ts'
import sum from './sum_module.ts'

logger(ApplicationName)
logger(sum(1, 2))
console.log(uuid.v1.generate())
```
- `url import`
```ts
import * as uuid from "https://deno.land/std@0.194.0/uuid/mod.ts"
console.log(uuid.v1.generate())
```
# import map
- Updating Visual Studio Code settings.json 
```json
{
    "deno.importMap": "./import_map.json"
}
```
```ts
import * as uuid from 'uuid/mod.ts'
console.log(uuid.v1.generate())
```
- Running Code
```ts
 deno run --allow-read --allow-write --import-map=import_map.json import_demo.ts 
```
# serve

# listenAndServe

# Handling Request

# Routing