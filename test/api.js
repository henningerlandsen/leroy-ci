var chakram = require('chakram');
var expect = chakram.expect;

describe('/jobs', function() {
    describe('GET', function() {
        it('returns a list of jobs', function() {
            return chakram.get('http://localhost:8080/jobs').then(function(response) {
                expect(response).to.have.status(200);
                expect(response).to.be.json([ 'test.js' ]);
            });
        })
    })
    describe('POST', function() {
        it('is disabled', function() {
            return chakram.post('http://localhost:8080/jobs').then(function(response) {
                expect(response).to.have.status(404);
            });
        })
    })
});