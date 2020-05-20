var http =require('http');
var {info,error}= require('./My-log');
var {countries} = require('countries-list');
var url = require ('url');
var querystring = require('querystring');

var server = http.createServer(function(req, res){
    var parsed = url.parse(req.url);
    //console.log("parsed:",parsed)
    
    var pathname = parsed.pathname;
    var query = querystring.parse(parsed.query);
    console.log('query', query);

    if(pathname == "/"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>Creado con nodejs:</h1> <a href="https://github.com/EdierDavidME/CursoNodejs">Click me</a>');
        res.end();
    }else if(pathname == "/salir"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>Adiosito</h1>');
        res.end();
    }else if(pathname == "/info"){
        var result = info("Repositorios Npm = ");
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(result);
        res.end();
    }else if(pathname == "/ciudades"){
        res.writeHead(200,{'Content-Type':'application/json'});
        res.write(JSON.stringify(countries[query.code]));
        res.end();
    }else if(pathname == "/error"){
        var Error = error(pathname);
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(Error);
        res.end();
    }else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.write('<h1>No se encontró la pagina</h1>');
        res.end();
    }
});

server.listen(3000);
console.log("Coneccion iniciada correctamente")
