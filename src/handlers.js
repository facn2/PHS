const fs = require('fs');
const path = require('path');
const worldCup2014 = require('./worldCup2014.js')
console.log('this is the require thing', worldCup2014);


const handleHomeRoute = (res) => {
	const filePath = path.join(__dirname, '..', 'public', 'index.html')
	fs.readFile(filePath, (error, file) => {
		if (error) {
			res.writeHead (500 , 'Content-Type: text/html')
			res.end ('<h1> sorry, the page doesnt response </h1>')
		} else {
			res.writeHead (200 , 'Content-Type: text/html')
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
		img: 'image/jpg'
	}

const filePath = path.join(__dirname, '..', url);
fs.readFile(filePath, (error, file) => {
	if(error) {
		console.log(error);
		res.writeHead(500, 'Content-Type: text/html');
		res.end('<h1>Sorry something went wrong</h1>');
	} else {
		res.writeHead(200, `Content-Type:${extensionType[extension]}`);
		res.end(file)
	}
})
}

const handleJson = (res) => {

	
		res.writeHead(200, 'Content-Type: application/javascript');
		res.end(JSON.stringify(worldCup2014));

}


module.exports = {
	handleHomeRoute,
	handlePublic,
	handleJson
	}
