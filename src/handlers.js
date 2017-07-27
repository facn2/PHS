const fs = require('fs');
const path = require('path');
const worldCup2014 = require('./worldCup2014.js');
const qs = require('querystring');
// console.log('this is the require thing', worldCup2014);


const handleHomeRoute = (res) => {
	const filePath = path.join(__dirname, '..', 'public', 'index.html')
	fs.readFile(filePath, (error, file) => {
		if (error) {
			res.writeHead(500, 'Content-Type: text/html')
			res.end('<h1> sorry, the page doesnt response </h1>')
		} else {
			res.writeHead(200, 'Content-Type: text/html')
			res.end(file);
		}
	});
}

const handlePublic = (res, url) => {
	const extension = url.split('.')[1];
	const extensionType = {
		html: 'text/html',
		css: 'text/css',
		js: 'application/javascript',
		ico: 'image/x-icon',
		img: 'image/png'
	}

	const filePath = path.join(__dirname, '..', url);
	fs.readFile(filePath, (error, file) => {
		if (error) {
			res.writeHead(500, 'Content-Type: text/html');
			res.end('<h1>Sorry something went wrong</h1>');
		} else {
			res.writeHead(200, `Content-Type:${extensionType[extension]}`);
			res.end(file)
		}
	})
}

// const handleJson = (req, res) => {
// 		res.writeHead(200, 'Content-Type: application/javascript');
// 		res.end(JSON.stringify(worldCup2014));
// 		console.log(req);
// }

const handleSearch = (req, res) => {
	var searchedUrl = qs.parse(req.url);
	var filteredPlayers = worldCup2014.filter((eachObject) => {
		return eachObject.FullName.toLowerCase().indexOf(searchedUrl['/search'].toLowerCase()) === 0;
	});
	// console.log(filteredPlayers);
	var newArray= [];
	filteredPlayers.forEach((filteredPlayer) => {
		newArray.push(filteredPlayer.FullName);
	});

	res.end(JSON.stringify(newArray));
}


module.exports = {
	handleHomeRoute,
	handlePublic,
	handleSearch
}
