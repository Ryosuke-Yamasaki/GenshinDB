const express = require('express');
const router = express.Router();
const knex = require("../db/knex");
const bcrypt = require("bcrypt");

router.get('/', function (req, res, next) {
  const isAuth = req.isAuthenticated();
  res.render('signup', {
    title: 'Sign up',
    isAuth: isAuth,
  });
});

router.post('/', function (req, res, next) {
  const isAuth = req.isAuthenticated();
  const username = req.body.username;
  const password = req.body.password;
  const repassword = req.body.repassword;

  knex("users")
    .where({ name: username })
    .select("*")
    .then(async function (result) {
      if (result.length !== 0) {
        res.render("signup", {
          title: "Sign up",
          errorMessage: ["このユーザ名は既に使われています"],
          isAuth: isAuth,
        })
      } else if (password === repassword) {
        const hashedPassword = await bcrypt.hash(password, 10);
        knex("users")
          .insert({ name: username, password: hashedPassword })
          .then(function () {
            knex("users")
              .select("*")
              .then(function (userId) {
                console.log(userId);
                knex("damage_myset")
                  .select("*")
                  .where({ id: 1 })
                  .then(function (tmp) {
                    console.log(tmp);
                    knex("damage_myset")
                      .insert({
                        user_id: userId[0]["id"],
                        character_id: tmp[0]["character_id"],
                        character_level: tmp[0]["character_level"],
                        normal_level: tmp[0]["normal_level"],
                        skill_level: tmp[0]["skill_level"],
                        burst_level: tmp[0]["burst_level"],
                        weapons_id: tmp[0]["weapons_id"],
                        refinement_id: tmp[0]["refinement_id"],
                        flowers_id: tmp[0]["flowers_id"],
                        plumes_id: tmp[0]["plumes_id"],
                        sands_id: tmp[0]["sands_id"],
                        goblets_id: tmp[0]["goblets_id"],
                        circlets_id: tmp[0]["circlets_id"],
                        flowersmainop_id: tmp[0]["flowersmainop_id"],
                        plumesmainop_id: tmp[0]["plumesmainop_id"],
                        sandsmainop_id: tmp[0]["sandsmainop_id"],
                        gobletsmainop_id: tmp[0]["gobletsmainop_id"],
                        circletsmainop_id: tmp[0]["circletsmainop_id"],
                      })
                      .then(function () {
                        res.redirect('/');
                      })
                      .catch(function (err) {
                        console.error(err);
                        res.render("signup", {
                          title: "Sign up",
                          errorMessage: [err.sqlMessage],
                          isAuth: isAuth,
                        });
                      });
                  })
                  .catch(function (err) {
                    console.error(err);
                    res.render("signup", {
                      title: "Sign up",
                      errorMessage: [err.sqlMessage],
                      isAuth: isAuth,
                    });
                  });
              })
              .catch(function (err) {
                console.error(err);
                res.render("signup", {
                  title: "Sign up",
                  errorMessage: [err.sqlMessage],
                  isAuth: isAuth,
                });
              });

          })
          .catch(function (err) {
            console.error(err);
            res.render("signup", {
              title: "Sign up",
              errorMessage: [err.sqlMessage],
              isAuth: isAuth,
            });
          });
      } else {
        res.render("signup", {
          title: "Sign up",
          errorMessage: ["パスワードが一致しません"],
          isAuth: isAuth,
        });
      }
    })
    .catch(function (err) {
      console.error(err);
      res.render("signup", {
        title: "Sign up",
        errorMessage: [err.sqlMessage],
        isAuth: isAuth,
      });
    });
});

module.exports = router;