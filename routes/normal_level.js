const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.post('/', function (req, res) {
  const userId = req.user.id;
  const normallevel = req.body.normal;
  knex("damage_myset")
    .where({ user_id: userId })
    .update({ normal_level: normallevel })
    .then(function () {
      res.redirect('/');
    });
});

module.exports = router;