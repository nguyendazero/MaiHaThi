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

eventEmitter.emit("response", 7, "Da");


