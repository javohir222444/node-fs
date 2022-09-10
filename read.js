const fs = require('fs');

function doo(error, buffer) {

    let s = buffer.toString()

    console.log('DATA:', s);
    console.log('ERROR:', error);
}

// fs.readFile('README.md', bazz)
fs.readFile('script.txt', doo)