// fetch is responsible for making HTTP request
const res = await fetch("https://deno.com");
const body = await res.text();
console.log(body);

// Blob represents raw binary data
// Used for handling and working with large amount of data in web application
// BLOB - Binary Large Object

const blob = new Blob([new Uint8Array([5, 10])])
console.log(blob)
