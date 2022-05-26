import * as express from 'express';

import {getFilms} from "./routes/getFilms.route";
import {getFilmsTestData} from "./routes/getFilmsTestData.route";
import {getTestData} from "./routes/getTestData.route";

const app = express();

app.get('/films', getFilms);
app.get('/films-test-data', getFilmsTestData);
app.get('/test-data', getTestData);

const port = process.env.port || 3002;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
