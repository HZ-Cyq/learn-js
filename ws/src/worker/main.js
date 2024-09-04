// main.js
const worker = new Worker('worker.js');

setInterval(() => {
    console.log("time: " + new Date());
    worker.postMessage(10);
}, 1000);

worker.onmessage = function(event) {
    console.log('Message received from worker:', event.data);  // 应该输出 20
};

worker.onerror = function(event) {
    console.error('Error in worker:', event.message);
};

