import * as express from 'express';

import {getFilms} from "./routes/getFilms.route";
import {getFilmsTestData} from "./routes/getFilmsTestData.route";
import {getTestData} from "./routes/getTestData.route";

const app = express();

app.get('/films', getFilms);
app.get('/films-test-data', getFilmsTestData);
app.get('/test-data', getTestData);
app.get('/test', (req, res) => {
  console.log('path:: /test       is OKeyshki ');
  res.status(200).send({test: 'test is OK'});
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/test`);
});

server.on('error', console.error);
