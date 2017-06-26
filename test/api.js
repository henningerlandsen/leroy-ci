var chakram = require('chakram');
var expect = chakram.expect;

describe('Jobs API', function() {
    describe('/jobs', function() {
        it('returns a list of jobs', function() {
            return chakram.get('http://localhost:8080/jobs').then(function(response) {
                expect(response).to.have.status(200);
                expect(response).to.be.json({ jobs: [ 'test.js' ]} );
            });
        })
    })
});