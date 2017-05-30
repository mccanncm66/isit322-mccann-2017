var express = require('express');
var router = express.Router();
const request = require('request');
const GitHub = require('github-api');

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'micro-first' });
});

router.get('/you-rang', function (request, response) {
    response.status(200).send({
        result: 'success',
        message: 'i am micro-first, up and running'
    });
});



router.get('/get-user', function(req, res, next) {
    const options = {
        url: 'https://api.github.com/users/mccanncm66',
        headers: {
            'User-Agent': 'request'
        }
    };

    request(options, function(error, response, body) {
        // Print the error if one occurred
        console.log('error:', error);
        // Print the response status code if a response was received
        console.log('statusCode:', response && response.statusCode);
        // Print the HTML for the Google homepage.
        console.log('body:', body);
        res.send({error: error, response: response, body: body});
    });

});

router.get('/charlie-jso', function(req, res, next) {
    const options = {
        url: 'https://api.github.com/repos/charliecalvert/JsObjects',
        headers: {
            'User-Agent': 'request'
        }
    };

    request(options, function(error, response, body) {
        // Print the error if one occurred
        console.log('error:', error);
        // Print the response status code if a response was received
        console.log('statusCode:', response && response.statusCode);
        // Print the HTML for the Google homepage.
        console.log('body:', body);
        res.send({error: error, response: response, body: body});
    });

});

module.exports = router;
