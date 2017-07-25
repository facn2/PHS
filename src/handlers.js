const fs = require('fs');
const path = require('path');

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

module.exports = {
	handleHomeRoute,
	}
