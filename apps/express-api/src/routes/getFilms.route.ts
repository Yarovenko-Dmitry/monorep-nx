import * as mysql from "mysql2"

const pool = mysql.createPool({
  connectionLimit: 10,
  // host: 'localhost',
  host: 'bd',
  port: 3306,
  // port: 8101,

  user: 'root',
  password: 'root',
  // database: 'testhub'
  database: 'dockerdb',
});

export const getFilms = (req, res) => {
  console.log('path MySQL:: /films ');
  const querySrting = 'SELECT * FROM films';
  pool.query(querySrting, (err, results) => {
    console.log(' err :', err);

    if (err) {
      res.status(400).send({error: err});
    } else {
      const wrappedResult = {
        // NOTE page, total_pages, total_results - stub data
        "page": 1,
        results,
        "total_pages": 33597,
        "total_results": 671937
      }

      res.status(200).send(wrappedResult);
    }
  })
}
