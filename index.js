const express = require('express');

const postsRouter = require('./posts/posts-router.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send(`
    <h2>Daily project API running</h2>
    `);
});

server.use('/api/posts', postsRouter);

const port = 8000;
server.listen(port, () => {
    console.log(`\n===  ⭐  API on Port ${port} ⭐   ===\n`);
  });