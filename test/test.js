var request = require('supertest');
var app = require('../index.js');

describe('GET /', function() {
    it('respond with Welcome', function(done) {
    //navigate to root and check the the response is "Welcome"
        request(app).get('/').expect('Welcome', done);
    });
});