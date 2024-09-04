const WebSocket = require("ws");
const readline = require('readline');

// 创建WebSocket客户端，连接到服务器
const socket = new WebSocket('ws://localhost:3000');

// 当连接建立时触发
socket.onopen = () => {
  console.log('Connected to server');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // 通过命令行输入消息并发送给服务器
  rl.on('line', (input) => {
    // 发送用户输入的消息
    socket.send(input);
  });
};

// 当接收到服务器发送的消息时触发
socket.onmessage = (event) => {
  console.log(`Received: ${event.data}`);
};

// 当连接关闭时触发
socket.onclose = () => {
  console.log('Connection closed');
};