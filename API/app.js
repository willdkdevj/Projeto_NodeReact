const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('./models/home');
const Home = mongoose.model('Home');

const app = express();

app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Autorization");
    app.use(cors());
    next();
})

mongoose.connect('mongodb+srv://<username>:<password>@cluster0.<idcluster>.mongodb.net/<databaseName>?retryWrites=true&w=majority', 
    {useNewUrlParser: true, useUnifiedTopology:true}).then(() => {
        console.log("Conexão com o MongoDB realizada com sucesso!");
    }).catch((err) => {
        console.log("ERRO: OCORREU UM PROBLEMA EM CONECTAR COM O MONGODB VIA DRIVER NODEJS");
    });
    
app.get('/home', async(req, res) => {
    await Home.findOne({}).then((home) => {
        return res.json({
            error: false,
            home
        });
    }).catch((err) => {
        return res.status(400).json({
            error: true,
            message: "Não foram encontrados registros para a página!"
        });
    })
});

app.post('/home', async(req, res) => {
    const dados = {
        "topTitulo": "Supernova Tecnology",
        "topSubTitulo": "Est recusandae internos qui molestiae nobis ad aliquam consequuntur aut alias corrupti quo veritatis voluptatum et quibusdam recusandae! Ut voluptatem facere ex enim nemo nam deleniti dolor quo recusandae eveniet et voluptatum quis.",
        "topTxtBtn": "Conheça",
        "topLnkBtn": "https://github.com/willdkdevops",
        "ptfTitulo": "Portfólio",
        "ptfSubTitulo": "Lorem ipsum dolor sit amet. Et dolor quasi et quia praesentium qui quidem dolores qui sunt quidem aut beatae quia aut voluptas quia ut repudiandae voluptatem.",
        "ptfIcnServUm": "code-branch",
        "ptfServUmTitulo": "Front-End",
        "ptfServUmSubTitulo": "Ab quasi reprehenderit ut saepe pariatur et voluptatem temporibus ut temporibus vero.",
        "ptfIcnServDois": "code",
        "ptfServDoisTitulo": "Back-End",
        "ptfServDoisSubTitulo": "Quo placeat impedit sed impedit officia vel iusto quidem. Id provident architecto ad illum iste eos aliquam voluptatibus qui quis nisi est corrupti placeat.",
        "ptfIcnServTres": "cloud-upload-alt",
        "ptfServTresTitulo": "Full Stack",
        "ptfServTresSubTitulo": "Ut numquam ipsam et voluptatem dignissimos et similique molestiae ut dolorem enim. ",
    }

    const homeExiste = await Home.findOne({});

    if(homeExiste){
        return res.status(400).json({
            error: true,
            message: "Já existe um registro no banco de dados! Não é necessário mais um registro para /home"
        });
    }

    await Home.create(dados, (err) => {
        if(err) return res.status(400).json({
            error: true,
            message: "ERRO: DADOS DA PÁGINA HOME NÃO CADASTRADOS DEVIDO A PROBLEMA NA CONEXÃO"
        });
    })

    return res.json({
        error: false,
        message: "Dados da página /home cadastrados com sucesso!"
    })
});

app.listen(8080, function(){
    console.log("Servidor iniciado na porta 8080");
});