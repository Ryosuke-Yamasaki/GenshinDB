const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.post('/', function (req, res) {
  const isAuth = req.isAuthenticated();
  const userId = req.user.id;
  const characterlevel = req.body.characterlevel;
  knex("damage_myset")
    .where({ user_id: userId })
    .update({ character_level: characterlevel })
    .then(function () {
      res.redirect('/');
    });
});

module.exports = router;