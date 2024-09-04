// worker.js
onmessage = function(event) {
    // 接收到主线程发送的消息
    console.log('Message received from main thread:', event.data);
    
    // 在这里执行一些计算任务
    let result = event.data * 2;

    // 将计算结果发送回主线程
    postMessage(result);
};
