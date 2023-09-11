const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.post('/', function (req, res) {
  const userId = req.user.id;
  const sandsId = req.body.sands;
  knex("damage_myset")
    .where({ user_id: userId })
    .update({ sands_id: sandsId })
    .then(function () {
      res.redirect('/');
    });
});

module.exports = router;