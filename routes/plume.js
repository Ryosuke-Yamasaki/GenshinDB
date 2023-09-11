const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.post('/', function (req, res) {
  const userId = req.user.id;
  const plumeId = req.body.plume;
  knex("damage_myset")
    .where({ user_id: userId })
    .update({ plumes_id: plumeId })
    .then(function () {
      res.redirect('/');
    });
});

module.exports = router;