/**
 * Created by bcuser on 4/30/17.
 */
const unknown = 'unknown';
const PARAGRAPH = 0;
const TEXT = 1;
const DEFAULT = PARAGRAPH;
const types = ['paragraph', 'text'];
var debug = require('debug')('git-convert');
debug('this is a test');

var fs = require('mz/fs');
var json = {};
function readFile(fileName) {
    return new Promise(function(resolve, reject) {
        fs.readFile('./git-user.json')
            .then(contents => resolve(contents))
            .catch(err => debug(err));
    });
}

readFile('git-user.json')
    .then(function(text) {
        return Promise.resolve(JSON.parse(text));
    }).then(function(parsedJson) {

    var fieldDefinition = [];

    for (var property in parsedJson) {

        if (parsedJson.hasOwnProperty(property)) {
            debug(property);
            debug(parsedJson[property]);
            fieldDefinition.push({
                id: property,
                label: property,
                type: types[DEFAULT],
                sample: property + ' ' + unknown
            });
        }
    }

    console.log(JSON.stringify(fieldDefinition, null, 4));
});
