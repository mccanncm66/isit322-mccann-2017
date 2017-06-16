const express = require('express');
const router = express.Router();
const Logger = require('./ElfLogger');
const logger = new Logger('routes-index');
const requester = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
    //use this for dev
    //res.render('index', {title: 'server'});

    //use this for build
    res.sendFile('index.html');
});

router.get('/foo', function(request, response, next) {
    const message = {'result': 'routes-success', 'foo': 'routes-barseer', 'file': 'routes-api.js'};
    //logger.log('Foo called on server with message:', message);
    response.send(message);
});

router.get('/user/get-user', function(request, response, next) {
    let userName = request.query.name;
    //requester('http://localhost:30026/get-user?name=' + userName).pipe(response);
    requester('https://git-user-service.herokuapp.com/get-user?name=' + userName).pipe(response);
});

router.get('/user/expo-get-user', function(request, response, next) {
    let userName = request.query.name;
    requester('https://git-user-service.herokuapp.com/get-user?name=mccanncm66').pipe(response);
    //requester('https://git-user-service.herokuapp.com/get-user?name=' + userName).pipe(response);
});

router.get('/user/charlie-jso', function(request, response, next) {
    requester('https://git-user-service.herokuapp.com/charlie-jso').pipe(response);
});

router.get('/gists/get-gist-list', function(request, response, next) {
    requester('https://gist-service.herokuapp.com/get-gist-list').pipe(response);
});

router.get('/gists/gist-test', function(request, response, next) {
    let fileName = request.query.name;
    let description = request.query.description;
    console.log('from index');
    console.log(fileName);
    requester('https://gist-service.herokuapp.com/gist-test?name=' + fileName + '&description=' + description).pipe(response);
});

router.get('/gists/delete', function(request, response, next) {
    const param = request.query.gistId;
    const url = '/delete?gistId=' + param;
    requester('https://gist-service.herokuapp.com' + url).pipe(response);
});

/*MICRO SERVICES TEST*/

router.get('/user/you-rang', function(request, response, next) {
    requester('https://git-user-service.herokuapp.com/you-rang').pipe(response);
});
router.get('/qux/you-rang', function(request, response, next) {
    requester('https://qux-service.herokuapp.com/you-rang').pipe(response);
});

router.get('/gists/you-rang', function(request, response, next) {
    requester('https://gist-service.herokuapp.com/you-rang').pipe(response);
});

module.exports = router;