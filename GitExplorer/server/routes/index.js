var express = require('express');
var router = express.Router();
const Logger = require('./ElfLogger');
var logger = new Logger('routes-index');
const requester = require('request');

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

router.get('/user/get-user', function(request, response, next) {
    requester('http://localhost:30026/get-user').pipe(response);
});

router.get('/gists/get-gist-list', function(request, response, next) {
    requester('http://localhost:30027/get-gist-list').pipe(response);
});

router.get('/gists/delete', function(request, response, next) {
    requester('http://localhost:30027/delete').pipe(response);
});
module.exports = router;