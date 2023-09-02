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
    const weaponsId = 115;
    const refinementId = "r1";
    const artifactId = 1;
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
              .select("name", talentsnormal)
              .where({ character_id: characterId, talents_type: 1 })
              .then(function (results3) {
                console.log(results3);
                knex("talents")
                  .select("name", talentselementalskill)
                  .where({ character_id: characterId, talents_type: 2 })
                  .then(function (results4) {
                    console.log(results4);
                    knex("talents")
                      .select("name", talentselementalburst)
                      .where({ character_id: characterId, talents_type: 3 })
                      .then(function (results5) {
                        console.log(results5);
                        knex("passive")
                          .select("name", "effect")
                          .where({ character_id: characterId })
                          .then(function (results6) {
                            console.log(results6);
                            knex("constellation")
                              .select("name", "effect")
                              .where({ character_id: characterId })
                              .then(function (results7) {
                                console.log(results7);
                                knex("weapons")
                                  .select("*")
                                  .where({ id: weaponsId })
                                  .then(function (results8) {
                                    console.log(results8);
                                    knex("refinement")
                                      .select("status_id", refinementId)
                                      .where({ weapons_id: weaponsId })
                                      .then(function (results9) {
                                        console.log(results9);
                                        knex("artifact")
                                          .select("*")
                                          .where({ id: artifactId })
                                          .then(function (results10) {
                                            console.log(results10);
                                            knex("artifact")
                                              .select("*")
                                              .where({ id: artifactId })
                                              .then(function (results11) {
                                                console.log(results11);
                                                knex("artifact")
                                                  .select("*")
                                                  .where({ id: artifactId })
                                                  .then(function (results12) {
                                                    console.log(results12);
                                                    knex("artifact")
                                                      .select("*")
                                                      .where({ id: artifactId })
                                                      .then(function (results13) {
                                                        console.log(results13);
                                                        knex("artifact")
                                                          .select("*")
                                                          .where({ id: artifactId })
                                                          .then(function (results14) {
                                                            console.log(results14);
                                                            res.render('index', {
                                                              title: 'Genshin DB',
                                                              characters: results1,
                                                              levels: results2,
                                                              talents_normal: results3,
                                                              talents_elementalslill: results4,
                                                              talents_elementalburst: results5,
                                                              passives: results6,
                                                              constellations: results7,
                                                              weapons: results8,
                                                              refinements: results9,
                                                              flowers: results10,
                                                              plumes: results11,
                                                              sands: results12,
                                                              goblets: results13,
                                                              circlets: results14,
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