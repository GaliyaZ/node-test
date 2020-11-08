const EventEmitter = require('events');
const emitter = new EventEmitter();

// emitter.on('anything', data => {
//     console.log('on: anything', data)
// });

// emitter.emit('anything', {a: 1});
// emitter.emit('anything', {a: 'samare'});

// setTimeout(() => {
//     emitter.emit('anything', {a: 'timeout sam'})
// }, 1500)

class Dispatcher extends EventEmitter {
    subscribe(eventName, myCallback) {
        console.log('subscribe... ');
        this.on(eventName, myCallback)
    };

    dispatch(eventName, data) {
        console.log('dispatching...')
        this.emit(eventName, data)
    }
};

const dis = new Dispatcher();

dis.subscribe('aa', data => {
    console.log('on: aa', data);
})

dis.dispatch('aa', {aa: 22});