const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://username:password@host:27017/supernova?options...', 
    {useNewUrlParser: true, useUnifiedTopology:true}).then(() => {
        console.log("Conexão com o MongoDB realizada com sucesso!");
    });
    
app.get('/', function(req, res){
    
});

app.listen(8080, function(){
    console.log("Servidor iniciado na porta 8080");
});