const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.post('/', function (req, res) {
  const userId = req.user.id;
  const refinementId = req.body.refinement;
  knex("damage_myset")
    .where({ user_id: userId })
    .update({ refinement_id: refinementId })
    .then(function () {
      res.redirect('/');
    });
});

module.exports = router;