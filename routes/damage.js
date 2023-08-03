const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', function(req, res) {
    const isAuth = req.isAuthenticated();
    res.render('index', {
        title: 'Genshin DB',
        isAuth: isAuth,
    });
});

router.post('/', function(req, res) {
    const isAuth = req.isAuthenticated();
    res.render('index', { 
      title: 'Genshin DB',
      isAuth: isAuth,
    });
  });

module.exports = router;