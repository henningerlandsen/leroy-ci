const fs = require('fs');
const util = require('util');
const express = require('express')
const app = express()

function disabled(req, res) {
    res.sendStatus(405);
}

app.get('/jobs', function (req, res) {
   const readdir = util.promisify(fs.readdir);

    readdir("jobs").then((jobslist) => {
    	res.json(jobslist);
    });
});
app.post('/jobs', disabled);
app.put('/jobs', disabled);
app.delete('/jobs', disabled);
app.patch('/jobs', disabled);



app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})