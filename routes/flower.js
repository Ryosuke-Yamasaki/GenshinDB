const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.post('/', function (req, res) {
  const userId = req.user.id;
  const flowerId = req.body.flower;
  knex("damage_myset")
    .where({ user_id: userId })
    .update({ flowers_id: flowerId })
    .then(function () {
      res.redirect('/');
    });
});

module.exports = router;