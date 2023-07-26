const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'TBdEAm3jKW&a',
  database: 'genshin_db'
});

//ejsに渡すやつ
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Genshin DB' });
});

//ejsから受け取ったやつを処理するやつ
router.post('/', function(req, res, next) {
  res.render('index', { title: 'Genshin DB' });
});

module.exports = router;