require('dotenv').config(); // ADD THIS LINE AT TOP
const http = require('http');
const app = require('./app');
const port = process.env.PORT || 4000; // Fixed variable name

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`🚀 Server LIVE: http://localhost:${port}`);
});