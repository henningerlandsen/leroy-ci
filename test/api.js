var chakram = require('chakram');
var expect = chakram.expect;

describe('Jobs API', function() {
    describe('/jobs', function() {
        it('returns a list of jobs', function(done) {
            chakram.get('http://localhost:8080/jobs').then(function(response) {
                expect(response).to.have.status(200);
                done();
            });
        })
    })
});