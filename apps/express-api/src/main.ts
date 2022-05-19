import * as express from 'express';

const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to express-api! test' });
});

app.get('/films', (req, res) => {
  res.send({ message: 'Films - Films - Films 333' });
});

const port = process.env.port || 3002;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
