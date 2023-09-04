const fs = require('fs');

const fn = async () => {
  let fileContent = await fs.readFileSync('./test.txt');
  console.log(fileContent.toString());
  let newContent = fileContent.toString().replace(/apple/g, 'Banana');
  fs.writeFileSync('./test.txt', newContent);
};
//fn();


let findPermutations = (string) => {
  if (!string || typeof string !== "string"){
    return "Please enter a string"
  } else if (string.length < 2 ){
    return string
  }

  let permutationsArray = [] 
   
  for (let i = 0; i < string.length; i++){
    let char = string[i]

    if (string.indexOf(char) != i)
    continue

    let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)

    for (let permutation of findPermutations(remainingChars)){
      permutationsArray.push(char + permutation) }
  }
  return permutationsArray
}

console.log(findPermutations('abc'));



const { Readable, Transform, Writable } = require('stream');

// Define a Readable stream that emits an array of numbers
class NumberGenerator extends Readable {
  constructor(options) {
    super(options);
    this.numbers = [1, 2, 3, 4, 5];
  }

  _read(size) {
    const number = this.numbers.shift();
    if (!number) return this.push(null);
    this.push(number.toString());
  }
}

// Define a Transform stream that doubles the input number
class Doubler extends Transform {
  _transform(chunk, encoding, callback) {
    const number = parseInt(chunk, 10);
    const doubledNumber = number * 2;
    this.push(doubledNumber.toString());
    callback();
  }
}

// Define a Writable stream that logs the output
class Logger extends Writable {
  _write(chunk, encoding, callback) {
    console.log(`Output: ${chunk}`);
    callback();
  }
}

// Create instances of the streams
const numberGenerator = new NumberGenerator();
const doubler = new Doubler();
const logger = new Logger();

// Chain the streams together
numberGenerator.pipe(doubler).pipe(logger);
