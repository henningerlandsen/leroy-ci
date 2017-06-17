const http = require('http');
const jobs = require('./jobs')

http.createServer(function (req, result) {
    result.writeHead(200, {'Content-Type': 'text/plain'});
    jobs.jobs('jobs').then((jobslist) => {
    	result.end(jobslist);
    }).catch((error) => {
    	result.end('No jobs found in ./jobs directory')
    });
}).listen(8080);