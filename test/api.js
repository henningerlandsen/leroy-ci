var chakram = require('chakram');
var expect = chakram.expect;


var globals = {
    server: '',
    currentUrl: ''
};

function server(url, test) {
    globals.server = url;
    describe(url, test);
}

function endpoint(url, test) {
    globals.currentUrl = globals.server + url;
    describe(url, test);
}

function request(method, test) {
    const m = method.toLowerCase();
    return chakram[m](globals.currentUrl).then(test);
}

function disabled(method) {
    describe(method, function() {
        it('is disabled', function() {
            return request(method, function(response) {
                expect(response).to.have.status(405);
            });
        });
    });
}

function result(method, expected_response) {
    describe(method, function() {
        it(`returns ${expected_response}`, function() {
            return request(method, function(actual_res) {
                expect(actual_res).to.have.status(200);
                expect(actual_res).to.be.json(expected_response);
            });
        });
    });
}

server('http://localhost:8080', () => {
    endpoint('/jobs', () => {
        result('GET', ['test.js']);
        disabled('POST');
        disabled('PUT');
        disabled('PATCH');
        disabled('DELETE');
    });
});