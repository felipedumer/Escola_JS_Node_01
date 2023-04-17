const fs = require('fs');

fs.writeFile('test.txt', 'Helloworld', err => {
    console.log(err);
})

fs.appendFile('test.txt', 'Helloworld', err => {
    console.log(err);
})

fs.rename('test.txt', 'text2.txt', err => {
    console.log(err);
})

fs.unlink( 'text2.txt', err => {
    console.log(err);
})

console.log(__dirname);