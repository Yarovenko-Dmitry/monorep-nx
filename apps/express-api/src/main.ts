import * as express from 'express';
import {getFilms} from "./routes/getFilms.route";

const app = express();

app.get('/films', getFilms);

const port = process.env.port || 3002;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
