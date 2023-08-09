const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', function (req, res) {
  const isAuth = req.isAuthenticated();
  res.render('index', {
    title: 'Genshin DB',
    isAuth: isAuth,
  });
});

router.post('/', function (req, res) {
  const isAuth = req.isAuthenticated();
  const characterId = req.body.character;
  if (isAuth) {
    knex("character")
      .select("*")
      .where({ id: characterId })
      .then(function (results) {
        console.log(results);
        res.render('index', {
          title: 'Genshin DB',
          characters: results,
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

module.exports = router;