const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.post('/', function (req, res) {
  const userId = req.user.id;
  knex("damage_myset")
    .select("flowers_id")
    .then(function (damage) {
      knex("artifact_myset")
        .insert({
          user_id: userId,
          artifact_id: damage[0]["flowers_id"],
          parts_id: 1,
          mainop_id: req.body["flower-mainop"],
          substatus1: req.body["flower-subop1"],
          substatus2: req.body["flower-subop2"],
          substatus3: req.body["flower-subop3"],
          substatus4: req.body["flower-subop4"],
          subnum1: req.body["flower-subste1"],
          subnum2: req.body["flower-subste2"],
          subnum3: req.body["flower-subste3"],
          subnum4: req.body["flower-subste4"],
        })
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