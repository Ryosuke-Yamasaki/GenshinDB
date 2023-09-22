const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.post('/', function (req, res) {
  const userId = req.user.id;
  console.log(Object.values(req.body));
  knex("artifact_myset")
    .insert({
      /*user_id: userId,
      artifact_id: req.body[Object.keys],
      parts_id: 1,
      mainop_id: 1,
      substatus1:,
      substatus2:,
      substatus3:,
      substatus4:,
      subnum1:,
      subnum2:,
      subnum3:,
      subnum4:,*/
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
});

module.exports = router;