const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'TBdEAm3jKW&a',
  database: 'genshin_db'
});

//ejsに渡すやつ
router.get('/', function(req, res) {
  connection.query(
      `select * from artifact_myset;`,
      (error, results) => {
          console.log('error = ' + error);
          console.log(results);
          res.render('index', {
              title: 'Genshin DB',
              data: results,
          });
      }
  )
});

//ejsから受け取ったやつを処理するやつ
router.post('/', function(req, res) {
  res.render('index', { title: 'ToDo App' });
});

router.use('/insert', require('./insert'));

module.exports = router;