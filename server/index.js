const http = require('http');
const bigInt = require('big-integer');
const fs = require('fs');
const port = 3000;

let CLICK_NUMBER = bigInt(0);

fs.readFile('./server/.result', (err, data) => {
	if (err) throw err;
	console.log(data.toString());
	CLICK_NUMBER = bigInt(data.toString());
	console.log('CLICK_NUMBER', CLICK_NUMBER);
});

const getBody = request =>
	new Promise((resolve, reject) => {
		var body = [];
		request
			.on('error', err => {
				reject(err);
			})
			.on('data', chunk => {
				body.push(chunk);
			})
			.on('end', () => {
				body = Buffer.concat(body).toString();
				resolve(body);
			});
	});

const requestHandler = (request, response) => {
	const { headers, method, url } = request;
	console.log('url', url);
	console.log('method', method);
	if (method === 'POST' && url === '/click') {
		getBody(request).then(body => {
			CLICK_NUMBER = CLICK_NUMBER.plus(body);
			console.log('CLICK_NUMBER', CLICK_NUMBER);
			response.end(CLICK_NUMBER.toString());
		});
	} else {
		response.end(CLICK_NUMBER);
	}
};

const server = http.createServer(requestHandler);

server.listen(port, err => {
	if (err) {
		return console.log('something bad happened', err);
	}

	console.log(`server is listening on ${port}`);
});
