// **** requires permission --allow-read
// readFile : returns Promise<Uint8Array>
const decoder = new TextDecoder('utf-8');
const data = await Deno.readFile('hello.txt');
console.log(decoder.decode(data));

// readTextFile - returns utf-8 decoded string
const dataTextAsync = await Deno.readTextFile("hello.txt");
console.log(dataTextAsync);

// readTextFileSync - returns utf-8 decoded string
const dataTextSync = await Deno.readTextFileSync('hello.txt')
console.log(dataTextSync)


//readFileSync : returns Promise<Uint8Array>
const dataSync = Deno.readFileSync("hello.txt");
console.log(decoder.decode(dataSync));