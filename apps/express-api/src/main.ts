import * as express from 'express';
import * as mysql from "mysql2"
import {serverResponse} from "@monorepo-nx/data-constants";

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   database: "newdb",
//   password: "password_root",
// });

const connection = mysql.createConnection({
  host: 'localhost',
  port: 8889,
  user: "root",
  password: "root",
  database: "testhub",
});

connection.connect(err => {
  if (err) {
    console.log(' connection.connect err :', err)
    return err
  } else {
    console.log(' data base connected')
  }
})

// const querySrting = 'SELECT * FROM users'
const querySrting = 'SELECT * FROM films'

connection.query(querySrting, (err, result) => {
  console.log(' err :', err)
  console.log(' result :', result)
})

const app = express();

app.get('/api', (req, res) => {
  res.send({message: 'Welcome to express-api! test'});
});

app.get('/films-test', (req, res) => {
  res.send({message: 'Films - Films - Films 333'});
});

app.get('/films', (req, res) => {
  res.send(serverResponse);
});

const port = process.env.port || 3002;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);

