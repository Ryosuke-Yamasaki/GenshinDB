const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const events = require('events');

const emitter = new events.EventEmitter();
emitter.on('level', () => {

})

router.get('/', function (req, res) {
  const isAuth = req.isAuthenticated();
  res.render('index', {
    title: 'Genshin DB',
    isAuth: isAuth,
  });
});

router.post('/', function (req, res) {
  const isAuth = req.isAuthenticated();
  const characterId = req.body.character;
  const level = req.body.level;


});

module.exports = router;