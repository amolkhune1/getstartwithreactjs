// const fs=require('fs');

// async function logChunks(readable) {
//   for await (const chunk of readable) {
//     console.log('str:',chunk);
//   }
// }

// const readable = fs.createReadStream(
//   '../test.txt', {encoding: 'utf8'});
// logChunks(readable);
// const stream =require('stream');

// async function readableToString2(readable) {
//     let result = '';
//     for await (const chunk of readable) {
//       result += chunk;
//     }
//     return result;
//   }
  
//   const readable = stream.Readable.from('Good morning!', {encoding: 'utf8'});
//   console.log(await readableToString2(readable))
 // assert.equal(await readableToString2(readable), 'Good morning!');

//  const { Readable } = require('stream');

// async function * generate() {
//   yield 'hello';
//   yield 'streams';
// }

// const readable = Readable.from(generate());

// readable.on('data', (chunk) => {
//   console.log('call:',chunk);
// });

var fs = require("fs");
var data = '';

var readerStream = fs.createReadStream('../test.txt'); //Create a readable stream

readerStream.setEncoding('UTF8'); // Set the encoding to be utf8. 

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function() {
   console.log(data);
});

readerStream.on('error', function(err) {
   console.log(err.stack);
});

console.log("Program Ended");

var fs = require('fs');
var readableStream = fs.createReadStream('file.txt');
var data = '';
var chunk;

readableStream.on('readable', function() {
    while ((chunk=readableStream.read()) != null) {
        data += chunk;
    }
});

readableStream.on('end', function() {
    console.log(data)
});