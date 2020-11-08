const path = require('path');

console.log('file name: ', path.basename(__filename));
console.log('свойства: ', path.parse(__filename));
console.log('Обратимся к полю: ', path.parse(__filename).ext);
console.log(path.join(__dirname, 'server', 'index.html'));