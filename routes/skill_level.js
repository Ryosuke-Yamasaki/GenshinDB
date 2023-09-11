const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.post('/', function (req, res) {
  const userId = req.user.id;
  const skilllevel = req.body.skill;
  knex("damage_myset")
    .where({ user_id: userId })
    .update({ skill_level: skilllevel })
    .then(function () {
      res.redirect('/');
    });
});

module.exports = router;