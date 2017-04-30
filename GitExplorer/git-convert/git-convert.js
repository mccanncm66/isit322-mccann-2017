/**
 * Created by bcuser on 4/30/17.
 */
var debug = require('debug')('git-convert');
debug('this is a test');

var fs = require('fs');
var json = {};

function readFile(fileName) {
    return new Promise(function(resolve, reject) {
        fs.readFile(fileName, '', function(err, data) {
            if (err) throw err;
            var obj = JSON.parse(data);
            resolve(JSON.stringify(obj));
            //console.log(json);
        });
    });
}

readFile('git-user.json').then(function(text) {
    // CODE OMITTED. This is where you solve the core of the assignment.
    var parseData = JSON.parse(text);
    console.log(parseData.login);
});
console.log(JSON.stringify(json));
for (var property in json) {
    if (json.hasOwnProperty(property)) {
        // YOUR WORK HERE
    }
}
console.log( /* LOG YOUR ARRAY OF OBJECTS */)