const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.post('/', function (req, res) {
  const userId = req.user.id;
  const burstlevel = req.body.burst;
  knex("damage_myset")
    .where({ user_id: userId })
    .update({ burst_level: burstlevel })
    .then(function () {
      res.redirect('/');
    });
});

module.exports = router;