const express = require('express');
const app = express();

app.get("/", function(req, res){
    res.send('Hello, World!');
});

app.get("/sobre", function(req, res){
    res.send('Página sobre');
});

app.get("/contato", function(req, res){
    res.send('Página contato')
});

app.listen(5051, function(){
    console.log("Servidor criado");
});