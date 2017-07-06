const fs = require('fs');
const util = require('util');
const express = require('express')
const app = express()


app.get('/jobs', function (req, res) {
   const readdir = util.promisify(fs.readdir);

    readdir("jobs").then((jobslist) => {
    	res.json(jobslist);
    });
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})