const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.post('/', function (req, res) {
  const userId = req.user.id;
  const circletId = req.body.circlet;
  knex("damage_myset")
    .where({ user_id: userId })
    .update({ circlets_id: circletId })
    .then(function () {
      res.redirect('/');
    });
});

module.exports = router;