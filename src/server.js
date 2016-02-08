var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {

	if (request.url == '/') {

		fs.readFile('paginas/index.ejs', function(err, html) {

			if (err) throw err;

			response.writeHeader(200, {'Content-Type': 'text/html'});
			response.write(html);
			response.end();
		});
	} else {

			response.write('<html><body><h2>Página não encontrada</h2>');
			response.write('<a href="/">Voltar</a></body></html>');
			response.end();
	}
});

server.listen(8080, function() {

	console.log('Executando na porta 8080...');
});
