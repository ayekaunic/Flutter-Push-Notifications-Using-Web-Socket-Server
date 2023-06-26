const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Client connected.');
  
  // send hello message to client
  ws.send('Hello, client!');
  
  // handle incoming messages from client and send em back
  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
    ws.send(message.toString());
  });
  
  // handle client disconnection
  ws.on('close', () => {
    console.log('Client disconnected.');
  });
});
