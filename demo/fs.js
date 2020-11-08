//file system
const fs = require('fs');
const path = require('path');

/*
fs.mkdir(path.join(__dirname, 'test'), (err) => {
    if (err) {throw err}
    console.log('success')
})*/

const filePath = path.join(__dirname, 'test', 'text.txt'); //строка с путем и именем файла
/*
fs.writeFile(filePath, 'Hello node from file! ', err => {
    if (err) {throw err}
    console.log('file created');
})*/

fs.readFile(filePath, 'utf-8', (err, content) => {
    if (err) {throw err}
     //const data = Buffer.from(content);console.log('wtf content? ', data.toString());
    //console.log('wtf content? ', content.toString());
    console.log('wtf content? ', content);
})