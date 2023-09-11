const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.post('/', function (req, res) {
  const userId = req.user.id;
  const characterId = req.body.character;
  knex("damage_myset")
    .where({ user_id: userId })
    .update({ character_id: characterId })
    .then(function () {
      res.redirect('/');
    });
});

module.exports = router;