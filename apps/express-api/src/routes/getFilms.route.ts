import * as mysql from "mysql2"

// settings for MySQL Workbench
/*const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "newdb",
  password: "password_root",
});*/

// settings for MAMP phpMyAdmin
// http://localhost:8888/phpMyAdmin5/
/*const connection = mysql.createConnection({
  host: 'localhost',
  port: 8889,
  user: "root",
  password: "root",
  database: "testhub",
});*/

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  port: 8889,
  user: 'root',
  password: 'root',
  database: 'testhub'
});

/*connection.connect(err => {
  if (err) {
    console.log(' connection.connect err :', err)
    return err
  } else {
    console.log(' data base connected')
  }
})*/

export const getFilms = (req, res) => {
  const querySrting = 'SELECT * FROM films'

  // connection.query(querySrting, (err, result) => {
  pool.query(querySrting, (err, results) => {
    console.log(' err :', err)

    if (err) {
      res.status(400).send(err);
    }

    const wrappedResult = {
      // NOTE page, total_pages, total_results - stub data
      "page": 1,
      results,
      "total_pages": 33597,
      "total_results": 671937
    }
    res.status(200).send(wrappedResult);
  })
}
