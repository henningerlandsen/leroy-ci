const http = require('http');
const fs = require('fs');
const util = require('util');


http.createServer(function (req, result) {
    result.writeHead(200, {'Content-Type': 'text/plain'});
    
    const readdir = util.promisify(fs.readdir);

    readdir("jobs").then((jobslist) => {
    	result.end(jobslist.join(','));
    }).catch((error) => {
    	console.log('Error reading directory', error)
    	result.end('No jobs found in ./jobs directory')
    });
}).listen(8080);