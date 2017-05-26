var express = require('express');
var router = express.Router();
const Logger = require('./ElfLogger');
var logger = new Logger('routes-index');

/* GET home page. */
router.get('/', function(req, res, next) {
   //use this for dev
   //res.render('index', {title: 'server'});

    //use this for build
    res.sendFile('index.html');
});

router.get('/foo', function(request, response, next) {
    const message = {'result': 'success', 'foo': 'barseer', 'file': 'api.js'};
    logger.log('Foo called on server with message:', message);
    response.send(message);
});

module.exports = router;
