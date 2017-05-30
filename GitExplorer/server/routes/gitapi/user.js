/**
 * Created by bcuser on 4/13/17.
 */
//import GitHub from 'github-api';
const express = require('express');
const router = express.Router();
const request = require('request');
const GitHub = require('github-api');

/* GET home page. */
/*router.get('/foo', function(request, response, next) {
    const message = {'result': 'success', 'foo': 'bar', 'file': 'api.js'};
    console.log('Foo called on server with message:', message);
    response.send(message);
});*/
/*
router.get('/', function(req, res, next) {
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

});*/

module.exports = router;