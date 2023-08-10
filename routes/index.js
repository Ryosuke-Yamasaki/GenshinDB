const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

//ejsに渡すやつ
router.get('/', function (req, res) {
  const isAuth = req.isAuthenticated();
  if (isAuth) {
    const characterId = 31;
    const characterlevel = "level_90";
    const talentsnormal = "level_8";
    const talentselementalskill = "level_8";
    const talentselementalburst = "level_8";
    knex("character")
      .select("*")
      .where({ id: characterId })
      .then(function (results1) {
        console.log(results1);
        knex("character_status")
          .select("status", characterlevel)
          .where({ character_id: characterId })
          .then(function (results2) {
            console.log(results2);
            knex("talents")
              .select("talents_type", "name", talentsnormal)
              .where({ character_id: characterId, talents_type: 1 })
              .then(function (results3) {
                console.log(results3);
                knex("talents")
                  .select("talents_type", "name", talentselementalskill)
                  .where({ character_id: characterId, talents_type: 2 })
                  .then(function (results4) {
                    console.log(results4);
                    knex("talents")
                      .select("talents_type", "name", talentselementalburst)
                      .where({ character_id: characterId, talents_type: 3 })
                      .then(function (results5) {
                        console.log(results5);
                        knex("passive")
                          .select("name", "effect")
                          .where({ character_id: characterId })
                          .then(function (results6) {
                            console.log(results6);
                            res.render('index', {
                              title: 'Genshin DB',
                              characters: results1,
                              levels: results2,
                              talents_normal: results3,
                              talents_elementalslill: results4,
                              talents_elementalburst: results5,
                              passives: results6,
                              isAuth: isAuth,
                            });
                          })
                          .catch(function (err) {
                            console.log(err);
                            res.render('index', {
                              title: 'Genshin DB',
                              isAuth: isAuth,
                            });
                          });
                      })
                      .catch(function (err) {
                        console.log(err);
                        res.render('index', {
                          title: 'Genshin DB',
                          isAuth: isAuth,
                        });
                      });
                  })
                  .catch(function (err) {
                    console.log(err);
                    res.render('index', {
                      title: 'Genshin DB',
                      isAuth: isAuth,
                    });
                  });
              })
              .catch(function (err) {
                console.log(err);
                res.render('index', {
                  title: 'Genshin DB',
                  isAuth: isAuth,
                });
              });
          })
          .catch(function (err) {
            console.log(err);
            res.render('index', {
              title: 'Genshin DB',
              isAuth: isAuth,
            });
          });
      })
      .catch(function (err) {
        console.log(err);
        res.render('index', {
          title: 'Genshin DB',
          isAuth: isAuth,
        });
      });
  } else {
    res.render('index', {
      title: 'Genshin DB',
      isAuth: isAuth,
    });
  }
});

//ejsから受け取ったやつを処理するやつ
router.post('/', function (req, res) {
  const isAuth = req.isAuthenticated();
  res.render('index', {
    title: 'Genshin DB',
    isAuth: isAuth,
  });
});

router.use('/insert_artifact', require('./insert_artifact'));
router.use('/select_character', require('./select_character'));
router.use('/select_level', require('./select_level'));

router.use('/signup', require('./signup'));
router.use('/signin', require('./signin'));
router.use('/logout', require('./logout'));

module.exports = router;