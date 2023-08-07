const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

//ejsに渡すやつ
router.get('/', function (req, res) {
    const isAuth = req.isAuthenticated();
    res.render('insert', {
        title: 'Genshin DB',
        isAuth: isAuth,
    });
});

//ejsから受け取ったやつを処理するやつ
router.post('/', function (req, res) {
    const isAuth = req.isAuthenticated();
    const userId = req.user.id;
    const artifact_id = req.body.artifacts;
    const parts_id = req.body.parts;
    const mainop_id = req.body.mainop;
    const substatus1 = req.body.subop1;
    const subnum1 = req.body.subnum1;
    const substatus2 = req.body.subop2;
    const subnum2 = req.body.subnum2;
    const substatus3 = req.body.subop3;
    const subnum3 = req.body.subnum3;
    const substatus4 = req.body.subop4;
    const subnum4 = req.body.subnum4;
    knex("artifact_myset")
        .insert({ user_id: userId, artifact_id: artifact_id, parts_id: parts_id, mainop_id: mainop_id, substatus1: substatus1, subnum1: subnum1, substatus2: substatus2, subnum2: subnum2, substatus3: substatus3, subnum3: subnum3, substatus4: substatus4, subnum4: subnum4 })
        .then(function () {
            res.redirect('/')
        })
        .catch(function (err) {
            console.log(err);
            res.render('index', {
                title: 'Genshin DB',
                isAuth: isAuth,
            });
        });
});

module.exports = router;