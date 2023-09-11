const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.post('/', function (req, res) {
  const userId = req.user.id;
  const gobletId = req.body.goblet;
  knex("damage_myset")
    .where({ user_id: userId })
    .update({ goblets_id: gobletId })
    .then(function () {
      res.redirect('/');
    });
});

module.exports = router;