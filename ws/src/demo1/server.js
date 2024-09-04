// 引入WebSocket模块
const WebSocket = require('ws');

// 创建WebSocket服务器，监听端口3000
const server = new WebSocket.Server({ port: 3000 });

// 当有客户端连接时触发
server.on('connection', (socket) => {
  console.log('Client connected');

  // 处理收到的消息
  socket.on('message', (data) => {
    console.log(`Received: ${data}`);

    // 广播消息给所有连接的客户端
    server.clients.forEach((client) => {
      if (client !== socket && client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });

  // 处理连接关闭
  socket.on('close', () => {
    console.log('Client disconnected');
  });
});