const express = require('express');
const router = express.Router();
const request = require('request');
const GitHub = require('github-api');
//const Logger = require('../ElfLogger');
//const logger = new Logger('gitapi-gists');
//const loggerDetails = new Logger('gitapi-gists:details'); //could have two different loggers

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'micro-second'});
});

router.get('/you-rang', function (request, response) {
    response.status(200).send({
        result: 'success',
        message: 'i am micro-second, up and running'
    });
});

/*router.get('/charlie', function (req, res, next) {
    const options = {
        url: 'https://api.github.com/users/charliecalvert',
        headers: {
            'User-Agent': 'request'
        }
    };

    request(options, function (error, response, body) {
        // Print the error if one occurred
        console.log('error:', error);
        // Print the response status code if a response was received
        console.log('statusCode:', response && response.statusCode);
        // Print the HTML for the Google homepage.
        console.log('body:', body);
        res.send({error: error, response: response, body: body});
    });

});*/

const token = '2ce8c1a3bf4eb4010c1dbc140aa5e205d8b62f24';
let getGitHub = function () {
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

/*router.get('/gist-test', function (request, response) {

    //const gh = new GitHub();
    const gh = getGitHub();
    let gist = gh.getGist(); // not a gist yet
    gist.create({
        public: true,
        description: 'My first gist',
        files: {
            'file1.txt': {
                content: 'Aren\'t gists great!'
            }
        }
    }).then(function ({data}) {
        // Promises!
        let createdGist = data;
        return gist.read();
    }).then(function ({data}) {
        let retrievedGist = data;
        // do interesting things
        //logger.log('RETRIEVED', retrievedGist);
        response.status(200).send({'result': retrievedGist});
    }).catch(function (err) {
        'use strict';
        response.status(500).send({'result': err});
    });

});*/

router.get('/get-gist-list', (request, response) => {
    let gh = getGitHub();
    const me = gh.getUser();
    me.listGists(
    ).then(function ({data}) {
        //logger.log('USER PROMISE', data);
        const results = data.map((gist) => (
            {
                url: gist.url,
                htmlUrl: gist.html_url,
                id: gist.id,
                description: gist.description,
                gitPullUrl: gist.git_pull_url,
                ownerLogin: gist.owner.login,
                avatarUrl: gist.owner.avatar_url,
                files: Object.keys(gist.files)

            }
        ));
        response.status(200).send({
            'count': results.length,
            'result': results
        });
    }).catch(function (err) {
        //logger.log('USER Promise Rejected', err);
        response.status(500).send({'result': err});
    });
});

router.get('/delete', (request, response, next) => {
    logger.log('delete called', request.query);
    const gistId = request.query.gistId;
    let gitHub = getGitHub();
    const gist = gitHub.getGist(gistId);
    gist.delete().then(({data}) => {
        response.status(200).send({
            'result': 'success',
            'gistId': gistId,
            'data': data
        });
    }).catch((err) => {
        logger.log('Delete promise rejected', err);
        response.status(500).send({'result': err});
    });
});

module.exports = router;
