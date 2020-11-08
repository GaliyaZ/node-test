const os = require('os');

console.log('operating system: ', os.platform());
console.log('processor architecture: ', os.arch());
//console.log('processor info: ', os.cpus());
console.log('free memory: ', os.freemem());
console.log('total memory: ', os.totalmem());
console.log('home dirrectory: ', os.homedir());
console.log('сколько времени запущена сис-ма: ', os.uptime());