const fs = require('fs');

const fn = async () => {
  let fileContent = await fs.readFileSync('./test.txt');
  console.log(fileContent.toString());
  let newContent = fileContent.toString().replace(/apple/g, 'Banana');
  fs.writeFileSync('./test.txt', newContent);
};
fn();
