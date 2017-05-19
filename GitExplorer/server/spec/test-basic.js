var request = require('supertest');
var app = require('../app');
const Logger = require('../routes/ElfLogger');
const logger = new Logger('test-basic');

describe('Elven Foo Suite', function() {

    'use strict';

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });
    it('get the foo route', function(done) {
        request(app)
            .get('/foo')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res) {
                if (err) {
                    throw err;
                }
                done();
            });
    });

    it('checks the foo response', function(done) {
        request(app)
            .get('/foo')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(function(response) {
                logger.log(response.body);
                expect(response.body.result).toBe('success');
                expect(response.body.foo).toBe('barseer');
                expect(response.body.file).toBe('api.js');
            })
            .end(function(err, res) {
                if (err) {
                    throw err;
                }
                done();
            });
    });

});
