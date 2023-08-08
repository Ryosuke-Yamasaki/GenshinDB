const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

//ejsに渡すやつ
router.get('/', function (req, res) {
  const isAuth = req.isAuthenticated();
  if (isAuth) {
    const characterId = 31;
    knex("character")
      .select("*")
      .where({ id: characterId })
      .then(function (results) {
        console.log(results);
        res.render('index', {
          title: 'Genshin DB',
          data: results,
          isAuth: isAuth,
        });
      })
      .catch(function (err) {
        console.log(err);
        res.render('index', {
          title: 'Genshin DB',
          isAuth: isAuth,
        });
      });
  } else {
    res.render('index', {
      title: 'Genshin DB',
      isAuth: isAuth,
    });
  }
});

//ejsから受け取ったやつを処理するやつ
router.post('/', function (req, res) {
  const isAuth = req.isAuthenticated();
  res.render('index', {
    title: 'Genshin DB',
    isAuth: isAuth,
  });
});

router.use('/insert_artifact', require('./insert_artifact'));
router.use('/select_character', require('./select_character'));

router.use('/signup', require('./signup'));
router.use('/signin', require('./signin'));
router.use('/logout', require('./logout'));

module.exports = router;