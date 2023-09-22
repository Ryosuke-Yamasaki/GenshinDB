const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.post('/', function (req, res) {
  const userId = req.user.id;
  const weaponsId = req.body.weapons;
  knex("damage_myset")
    .where({ user_id: userId })
    .update({ weapons_id: weaponsId })
    .then(function () {
      res.redirect('/');
    })
    .catch(function (err) {
      console.log(err);
      res.render('index', {
        title: 'Genshin DB',
        errorMessage: [err.sqlMessage],
        isAuth: isAuth,
      });
    })
});

module.exports = router;