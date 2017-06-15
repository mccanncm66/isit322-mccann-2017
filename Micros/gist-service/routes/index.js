const express = require('express');
const router = express.Router();
const request = require('request');
const GitHub = require('github-api');

router.get('/', function (req, res, next) {
    res.render('index', {title: 'gist-service'});
});

router.get('/you-rang', function (request, response) {
    response.status(200).send({
        result: 'success',
        message: 'i am gist-service, up and running'
    });
});

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

router.get('/gist-test', function (request, response) {
    const filename = request.query.name + '.txt';
    const description = request.query.description;
    console.log('description=' + description);
    console.log(filename);
    const gh = getGitHub();
    let gist = gh.getGist();
    gist.create({
        public: true,
        description: description,
        files: {
            'file1.txt': {
                filename: filename,
                content: 'Aren\'t gists great Testing!'
            }
        }
    }).then(function ({data}) {
        let createdGist = data;
        return gist.read();
    }).then(function ({data}) {
        let retrievedGist = data;
        response.status(200).send({'result': retrievedGist});
    }).catch(function (err) {
        'use strict';
        response.status(500).send({'result': err});
    });

});

router.get('/get-gist-list', (request, response) => {
    let gh = getGitHub();
    const me = gh.getUser();
    me.listGists(
    ).then(function ({data}) {
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
        response.status(500).send({'result': err});
    });
});

router.get('/delete', (request, response, next) => {
    const gistId = request.query.gistId;
    console.log('delete called from gist-service');
    console.log(gistId);
    let gitHub = getGitHub();
    const gist = gitHub.getGist(gistId);
    gist.delete().then(({data}) => {
        response.status(200).send({
            'result': 'success',
            'gistId': gistId,
            'data': data
        });
    }).catch((err) => {
        console.log('Failed to delete');
        response.status(500).send({'result': err});
    });
});

module.exports = router;
