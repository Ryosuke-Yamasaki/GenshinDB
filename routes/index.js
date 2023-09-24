const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

//ejsに渡すやつ
router.get('/', function (req, res) {
  const isAuth = req.isAuthenticated();
  if (isAuth) {
    knex("damage_myset")
      .select("*")
      .where({ user_id: req.user.id })
      .then(function (damage) {
        console.log(damage);
        knex("character")
          .select("*")
          .where({ id: damage[0]["character_id"] })
          .then(function (results1) {
            console.log(results1);
            knex("character_status")
              .select("status", damage[0]["character_level"])
              .where({ character_id: damage[0]["character_id"] })
              .then(function (results2) {
                console.log(results2);
                knex("talents")
                  .select("name", "talents_type", damage[0]["normal_level"])
                  .where({ character_id: damage[0]["character_id"], talents_class: 1 })
                  .then(function (results3) {
                    console.log(results3);
                    knex("talents")
                      .select("name", "talents_type", damage[0]["skill_level"])
                      .where({ character_id: damage[0]["character_id"], talents_class: 2 })
                      .then(function (results4) {
                        console.log(results4);
                        knex("talents")
                          .select("name", "talents_type", damage[0]["burst_level"])
                          .where({ character_id: damage[0]["character_id"], talents_class: 3 })
                          .then(function (results5) {
                            console.log(results5);
                            knex("passive")
                              .select("name", "effect")
                              .where({ character_id: damage[0]["character_id"] })
                              .then(function (results6) {
                                console.log(results6);
                                knex("constellation")
                                  .select("id", "constellation_type", "name", "effect")
                                  .where({ character_id: damage[0]["character_id"] })
                                  .then(function (results7) {
                                    console.log(results7);
                                    knex("weapons")
                                      .select("*")
                                      .where({ id: damage[0]["weapons_id"] })
                                      .then(function (results8) {
                                        console.log(results8);
                                        knex("refinement")
                                          .select("status_id", damage[0]["refinement_id"])
                                          .where({ weapons_id: damage[0]["weapons_id"] })
                                          .then(function (results9) {
                                            console.log(results9);
                                            knex("artifact")
                                              .select("*")
                                              .where({ id: damage[0]["flowers_id"] })
                                              .then(function (results10) {
                                                console.log(results10);
                                                knex("artifact")
                                                  .select("*")
                                                  .where({ id: damage[0]["plumes_id"] })
                                                  .then(function (results11) {
                                                    console.log(results11);
                                                    knex("artifact")
                                                      .select("*")
                                                      .where({ id: damage[0]["sands_id"] })
                                                      .then(function (results12) {
                                                        console.log(results12);
                                                        knex("artifact")
                                                          .select("*")
                                                          .where({ id: damage[0]["goblets_id"] })
                                                          .then(function (results13) {
                                                            console.log(results13);
                                                            knex("artifact")
                                                              .select("*")
                                                              .where({ id: damage[0]["circlets_id"] })
                                                              .then(function (results14) {
                                                                console.log(results14);
                                                                knex("mainop")
                                                                  .select("status_id", results10[0]["quality"])
                                                                  .where({ id: damage[0]["flowersmainop_id"] })
                                                                  .then(function (results15) {
                                                                    console.log(results15);
                                                                    knex("mainop")
                                                                      .select("status_id", results11[0]["quality"])
                                                                      .where({ id: damage[0]["plumesmainop_id"] })
                                                                      .then(function (results16) {
                                                                        console.log(results16);
                                                                        knex("mainop")
                                                                          .select("status_id", results12[0]["quality"])
                                                                          .where({ id: damage[0]["sandsmainop_id"] })
                                                                          .then(function (results17) {
                                                                            console.log(results17);
                                                                            knex("mainop")
                                                                              .select("status_id", results13[0]["quality"])
                                                                              .where({ id: damage[0]["gobletsmainop_id"] })
                                                                              .then(function (results18) {
                                                                                console.log(results18);
                                                                                knex("mainop")
                                                                                  .select("status_id", results14[0]["quality"])
                                                                                  .where({ id: damage[0]["circletsmainop_id"] })
                                                                                  .then(function (results19) {
                                                                                    console.log(results19);
                                                                                    res.render('index', {
                                                                                      title: 'Genshin DB',
                                                                                      characters: results1,
                                                                                      levels: results2,
                                                                                      talents_normal: results3,
                                                                                      talents_elementalskill: results4,
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
                                                                                      flowersmainop: results15,
                                                                                      plumesmainop: results16,
                                                                                      sandsmainop: results17,
                                                                                      gobletsmainop: results18,
                                                                                      circletsmainop: results19,
                                                                                      isAuth: isAuth,
                                                                                    });
                                                                                  })
                                                                                  .catch(function (err) {
                                                                                    console.log(err);
                                                                                    res.render('index', {
                                                                                      title: 'Genshin DB',
                                                                                      errorMessage: [err.sqlMessage],
                                                                                      isAuth: isAuth,
                                                                                    });
                                                                                  });
                                                                              })
                                                                              .catch(function (err) {
                                                                                console.log(err);
                                                                                res.render('index', {
                                                                                  title: 'Genshin DB',
                                                                                  errorMessage: [err.sqlMessage],
                                                                                  isAuth: isAuth,
                                                                                });
                                                                              });
                                                                          })
                                                                          .catch(function (err) {
                                                                            console.log(err);
                                                                            res.render('index', {
                                                                              title: 'Genshin DB',
                                                                              errorMessage: [err.sqlMessage],
                                                                              isAuth: isAuth,
                                                                            });
                                                                          });
                                                                      })
                                                                      .catch(function (err) {
                                                                        console.log(err);
                                                                        res.render('index', {
                                                                          title: 'Genshin DB',
                                                                          errorMessage: [err.sqlMessage],
                                                                          isAuth: isAuth,
                                                                        });
                                                                      });
                                                                  })
                                                                  .catch(function (err) {
                                                                    console.log(err);
                                                                    res.render('index', {
                                                                      title: 'Genshin DB',
                                                                      errorMessage: [err.sqlMessage],
                                                                      isAuth: isAuth,
                                                                    });
                                                                  });
                                                              })
                                                              .catch(function (err) {
                                                                console.log(err);
                                                                res.render('index', {
                                                                  title: 'Genshin DB',
                                                                  errorMessage: [err.sqlMessage],
                                                                  isAuth: isAuth,
                                                                });
                                                              });
                                                          })
                                                          .catch(function (err) {
                                                            console.log(err);
                                                            res.render('index', {
                                                              title: 'Genshin DB',
                                                              errorMessage: [err.sqlMessage],
                                                              isAuth: isAuth,
                                                            });
                                                          });
                                                      })
                                                      .catch(function (err) {
                                                        console.log(err);
                                                        res.render('index', {
                                                          title: 'Genshin DB',
                                                          errorMessage: [err.sqlMessage],
                                                          isAuth: isAuth,
                                                        });
                                                      });
                                                  })
                                                  .catch(function (err) {
                                                    console.log(err);
                                                    res.render('index', {
                                                      title: 'Genshin DB',
                                                      errorMessage: [err.sqlMessage],
                                                      isAuth: isAuth,
                                                    });
                                                  });
                                              })
                                              .catch(function (err) {
                                                console.log(err);
                                                res.render('index', {
                                                  title: 'Genshin DB',
                                                  errorMessage: [err.sqlMessage],
                                                  isAuth: isAuth,
                                                });
                                              });
                                          })
                                          .catch(function (err) {
                                            console.log(err);
                                            res.render('index', {
                                              title: 'Genshin DB',
                                              errorMessage: [err.sqlMessage],
                                              isAuth: isAuth,
                                            });
                                          });
                                      })
                                      .catch(function (err) {
                                        console.log(err);
                                        res.render('index', {
                                          title: 'Genshin DB',
                                          errorMessage: [err.sqlMessage],
                                          isAuth: isAuth,
                                        });
                                      });
                                  })
                                  .catch(function (err) {
                                    console.log(err);
                                    res.render('index', {
                                      title: 'Genshin DB',
                                      errorMessage: [err.sqlMessage],
                                      isAuth: isAuth,
                                    });
                                  });
                              })
                              .catch(function (err) {
                                console.log(err);
                                res.render('index', {
                                  title: 'Genshin DB',
                                  errorMessage: [err.sqlMessage],
                                  isAuth: isAuth,
                                });
                              });
                          })
                          .catch(function (err) {
                            console.log(err);
                            res.render('index', {
                              title: 'Genshin DB',
                              errorMessage: [err.sqlMessage],
                              isAuth: isAuth,
                            });
                          });
                      })
                      .catch(function (err) {
                        console.log(err);
                        res.render('index', {
                          title: 'Genshin DB',
                          errorMessage: [err.sqlMessage],
                          isAuth: isAuth,
                        });
                      });
                  })
                  .catch(function (err) {
                    console.log(err);
                    res.render('index', {
                      title: 'Genshin DB',
                      errorMessage: [err.sqlMessage],
                      isAuth: isAuth,
                    });
                  });
              })
              .catch(function (err) {
                console.log(err);
                res.render('index', {
                  title: 'Genshin DB',
                  errorMessage: [err.sqlMessage],
                  isAuth: isAuth,
                });
              });
          })
          .catch(function (err) {
            console.log(err);
            res.render('index', {
              title: 'Genshin DB',
              errorMessage: [err.sqlMessage],
              isAuth: isAuth,
            });
          });
      })
      .catch(function (err) {
        console.log(err);
        res.render('index', {
          title: 'Genshin DB',
          errorMessage: [err.sqlMessage],
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

router.use('/character', require('./character'));
router.use('/character_level', require('./character_level'));
router.use('/normal_level', require('./normal_level'));
router.use('/skill_level', require('./skill_level'));
router.use('/burst_level', require('./burst_level'));
router.use('/weapons', require('./weapons'));
router.use('/refinement', require('./refinement'));
router.use('/flower', require('./flower'));
router.use('/plume', require('./plume'));
router.use('/sands', require('./sands'));
router.use('/goblet', require('./goblet'));
router.use('/circlet', require('./circlet'));
router.use('/insert_flower', require('./insert_flower'));
router.use('/insert_plume', require('./insert_plume'));
router.use('/insert_sands', require('./insert_sands'));
router.use('/insert_goblet', require('./insert_goblet'));
router.use('/insert_circlet', require('./insert_circlet'));
router.use('/flower_mainop', require('./flower_mainop'));
router.use('/plume_mainop', require('./plume_mainop'));
router.use('/sands_mainop', require('./sands_mainop'));
router.use('/goblet_mainop', require('./goblet_mainop'));
router.use('/circlet_mainop', require('./circlet_mainop'));

router.use('/signup', require('./signup'));
router.use('/signin', require('./signin'));
router.use('/logout', require('./logout'));

module.exports = router;