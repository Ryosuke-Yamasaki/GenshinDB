const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'TBdEAm3jKW&a',
  database: 'genshin_db'
});

//ejsに渡すやつ
router.get('/', function(req, res) {
    res.render('insert', {
        title: 'Genshin DB',
      });
});

//ejsから受け取ったやつを処理するやつ
router.post('/', function(req, res) {
    connection.connect((err) => {
        if (err) {
            console.log('error connecting: ' + err.stack);
            return
        }
        console.log('success');
    });
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
    connection.query(
        `insert into artifact_myset (artifact_id, parts_id, mainop_id, substatus1, subnum1, substatus2, subnum2, substatus3, subnum3, substatus4, subnum4) values (${artifact_id}, ${parts_id}, ${mainop_id}, ${substatus1}, ${subnum1}, ${substatus2}, ${subnum2}, ${substatus3}, ${subnum3}, ${substatus4}, ${subnum4});`,
        (error, results) => {
            console.log(error);
            res.redirect('/');
        }
    );
});

module.exports = router;