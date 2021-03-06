var express = require('express');
var router = express.Router();
const { Client } = require('pg');

const host = process.env.DB_HOST || '127.0.0.1';

/* GET home page. */
router.get('/', function(req, expRes, next) {
  const client = new Client({
    user: 'postgres',
    host: host,
    password: 'postgres',
    database: 'getstartednode'
  });
  client.connect();
  client.query(`INSERT INTO counter VALUES (1); SELECT * FROM counter`, (err, res) => {
    client.end();
    if (err) {
      console.log('error', err);
    }
    expRes.render('index', { title: 'Express', counter: res[1].rowCount });
  });
});

module.exports = router;
