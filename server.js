var express = require('express')
var fs = require('fs')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.json({message: 'Spotify Voice Backend'})
})

app.get('/:jsonFile', function (req, res){
	readJSONFile(req.params.jsonFile)
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.status(404).send(req.params.jsonFile + ' not found');
		});
});

app.listen(3001, () => console.log('Spotify Voice server listening on port 3001!'))


function readJSONFile(filename) {

	return new Promise((resolve, reject) => {

		fs.readFile('./server/' + filename, function (err, data) {
		    if(err) {
		      reject(err);
		    }
		    try {
		      resolve(JSON.parse(data));
		    } catch(exception) {
		      reject(exception);
		    }
		  });
	});
 
}