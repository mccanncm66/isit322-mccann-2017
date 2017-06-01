var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'markdown-service' });
});

router.get('/you-rang', function (request, response) {
    response.status(200).send({
        result: 'success',
        message: 'i am markdown, up and running'
    });
});

module.exports = router;
