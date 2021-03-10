const express = require('express');
const mongoose = require('mongoose');

require('./models/home');
const Home = mongoose.model('Home');

const app = express();

mongoose.connect('mongodb+srv://dbManager:Dkrock!@182@cluster0.gw5wz.mongodb.net/supernovaDB?retryWrites=true&w=majority', 
    {useNewUrlParser: true, useUnifiedTopology:true}).then(() => {
        console.log("Conexão com o MongoDB realizada com sucesso!");
    }).catch((err) => {
        console.log("ERRO: OCORREU UM PROBLEMA EM CONECTAR COM O MONGODB VIA DRIVER NODEJS");
    });
    
app.get('/home', function(req, res){
    
});

app.post('/home', function(req, res){
    
});

app.listen(8080, function(){
    console.log("Servidor iniciado na porta 8080");
});