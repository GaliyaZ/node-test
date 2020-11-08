const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // res.writeHead(200, {'Content-type': 'text/plain'})
    
    // console.log(req.url);
    /*if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
            if (err) {
                throw err
            }
            res.writeHead(200, {'Content-type': 'text/html'})
            res.end(data)
        })
    }
    else if (req.url ==='/contact') {
        fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
            if (err) {
                throw err
            }
            res.writeHead(200, {'Content-type': 'text/html'})
            res.end(data)
        })
    }*/
    // res.end('<h1 style = "background: green;">Hello Node JS (server)</h1>')
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)
    const ext = path.extname(filePath);
    let contentType = 'text/html'

    switch (ext) {
        case '.css': contentType = 'text/css'
        break;
        case '.js': contentType = 'text/javascript'
        break;
        default: contentType = 'text/html'
    }

    console.log(filePath);
    if (!ext) {
        filePath += '.html'
        console.log(filePath);
    }
    
    fs.readFile(filePath, (err, content) => {
        if (err) {
            fs.readFile(path.join(__dirname, 'public', 'err.html'), (err, data) => {
                if (err) {
                    res.writeHead(500);
                    res.end('error');
                } else {
                    res.writeHead(200, {'Content-type': 'text/html'})
                    res.end(data)
                }
            })
        } else {
            res.writeHead(200, {'Content-type': contentType})
            res.end(content)
        }
    })

})

const port = process.env.port || 3000;

server.listen(port, () => {
    console.log('server has been started on', port, 'port...')
})
// const chalk = require('chalk')
// const text = require('./data')

// console.log(chalk.blue(text))
// console.log(__filename);