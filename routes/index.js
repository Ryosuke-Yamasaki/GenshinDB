const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'TBdEAm3jKW&a',
  database: 'genshin_db'
});

//ejsに渡すやつ
router.get('/', function(req, res) {
  knex("artifact_myset")
    .select("*")
    .then(function (results) {
      console.log(results);
      res.render('index', {
        title: 'Genshin DB',
        data: results,
      });
    })
    .catch(function (err) {
      console.log(err);
      res.render('index', {
        title: 'Genshin DB',
      });
    });
});

//ejsから受け取ったやつを処理するやつ
router.post('/', function(req, res) {
  res.render('index', { title: 'Genshin DB' });
});

router.use('/insert', require('./insert'));

module.exports = router;