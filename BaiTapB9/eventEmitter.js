const events = require('events');
const eventEmitter = new events.EventEmitter();

function sayHello(name){
    console.log("hello " + name);
}
eventEmitter.on('a', sayHello);
eventEmitter.emit('a', 'Da');

eventEmitter.on("response", () => {
  console.log("no param");
});

eventEmitter.on("response", (id, name) => {
  console.log(`${id} ${name}`);
});

eventEmitter.on("response2", (a, b) => {
    console.log(a+b);
});

eventEmitter.emit("response", 7, "Da");
eventEmitter.emit("response2", 7, 27);

