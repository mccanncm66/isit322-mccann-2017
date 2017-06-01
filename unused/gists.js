/*
*
 * Created by bcuser on 5/16/17.
/!**
 * Created by bcuser on 4/13/17.
 *!/
//import GitHub from 'github-api';
const express = require('express');
const router = express.Router();
const request = require('request');
const GitHub = require('github-api');
const Logger = require('../ElfLogger');
const logger = new Logger('gitapi-gists');
//const loggerDetails = new Logger('gitapi-gists:details'); //could have two different loggers

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

module.exports = router;*/
