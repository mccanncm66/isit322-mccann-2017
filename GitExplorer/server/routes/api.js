/**
 * Created by bcuser on 4/13/17.
 */
//import GitHub from 'github-api';
const express = require('express');
const router = express.Router();
const request = require('request');
const GitHub = require('github-api');

/* GET home page. */
router.get('/foo', function(request, response, next) {
    const message = { 'result': 'success', 'foo': 'bar', 'file': 'api.js' };
    console.log('Foo called on server with message:', message);
    response.send(message);
});



router.get('/user', function(req, res, next) {
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

router.get('/charlie', function(req, res, next) {
    const options = {
        url: 'https://api.github.com/users/charliecalvert',
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
const token = '2ce8c1a3bf4eb4010c1dbc140aa5e205d8b62f24';
let getGitHub = function() {
    let gh;
    if (true) {
        gh = new GitHub({
            token: token
        });
    } else {
        gh = new GitHub({
            username: 'charliecalvert',
            password: ''
        });
    }
    return gh;
};
router.get('/gist-test', function(request, response) {

    //const gh = new GitHub();
    const  gh = getGitHub();
    let gist = gh.getGist(); // not a gist yet
    gist.create({
        public: true,
        description: 'My first gist',
        files: {
            "file1.txt": {
                content: "Aren't gists great!"
            }
        }
    }).then(function({data}) {
        // Promises!
        let createdGist = data;
        return gist.read();
    }).then(function({data}) {
        let retrievedGist = data;
        // do interesting things
        console.log('RETRIEVED', retrievedGist);
        response.status(200).send({'result': retrievedGist});
    }).catch(function(err) {
        "use strict";
        response.status(500).send({'result': err});
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