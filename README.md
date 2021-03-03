# Trabalhando com Express (JavaScript)
> Modelo NodeJS que trabalha com o Framework Express para gerenciar as páginas JSs do projeto.

[![NPM Version][NPM-image]][npm-url]
[![Bundle Size][npm-bundle-size]][npm-url]
[![NODE Version][NODE-image]][node-url]

![](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png?w=283)  

Neste projeto JS foi criado um arquivo gerenciador (index) na qual mapeia todas as páginas do projeto.
Ele funciona como uma tabela de roteamento, que permite descrever quais são as rotas válidas para acessar seguramente as páginas de um projeto JS. Mas não se resumi a isso, pois ele fornece uma camada fina de recursos para aplicativos da web, no entanto, nos restrigeremos ao roteamento.


## Etapas para Executar este Projeto na Máquina
Primeiro se faz necessário ter o Node JS instalado na maquina. Desta forma, para verificar se o host possui ele instalado execute o comando:

```sh
node -v
```  

Caso verificado que não existe o retorno da versão do Node, execute o seguinte comando para instalá-lo:

```sh
sudo apt install nodejs
```


## Etapas para baixar o Framework Express
Depois iremos instalar o framework [Express](https://expressjs.com/pt-br/) no diretório raiz de nosso projeto, onde este framework permite trabalhar de forma simples a parametrização das rotas de paginas em nosso projeto. 

Mas para isso, temos que ter um Gerenciador de Pacotes para a linguagem JavaScript, onde o NPM é o gerenciador padrão da linguagem. Assim para realizaremos a consulta via terminal, se existe uma versão instalada utilizamos o seguinte comando:

```sh
npm -v
```

Caso não o possua instalado, execute o seguinte comando:
```sh
sudo apt install npm
```


Agora que confirmamos que temos um gerenciador de pacotes JS executamos o seguinte comando:

```sh
npm install express --save
```


## Estrutura do Arquivo de Roteamento
O arquivo principal para o roteamento é o ``index.js``, na qual em sua primeira linha consta a definição do módulo que utilizaremos, no caso o Express e aplicamos a uma constante o a função express;
```sh
const express = require("express");
const app = express();
```

* Utilizaremos o método get para informar as páginas que abriremos, ao informar o caminho e a função que recebe uma requisição e uma resposta. (Repetimos este procedimento para cada página que desejamos mapear para exibição do site);
* Para concluir, é utilizado o método listen para informar em qual porta o servidor estará ativo.

```sh
app.get("/home", function(req, res){
    res.send("Gerenciador de Paginas!")
});

app.get("/sobre", function(req, res){
    res.send("Gerenciador de Sobre o Autor!")
});

app.get("/portfolio", function(req, res){
    res.send("Gerenciador de Portfolio!")
});

app.listen(8081)
```

Neste arquivo estamos utilizando o método send() do parâmetro res só para apresentar uma frase no momento que invocarmos a página, só para exemplificação, mas neste local é que instanciamos as páginas propriamente dito.


## Para Iniciar o Servidor na Máquina
Para verificar se deu tudo certo, faça as etapas a seguir:

1. Abra o terminal no diretório na qual estão os arquivos do projeto;

2. Digite o seguinte comando:
```sh
node index.js
```

3. Abra um navegador de sua preferência, mas não o abra em página anônima;

4. Digite o seguinte endereço: <http://localhost:8081/index> ou no lugar de "home" a página que você aplicou em um dos métodos get() do arquivo _index_;

5. Para parar o servidor pressione o seguinte comando no terminal **Ctrl+C**.

## Agradecimentos
Obrigado por ter visto meus esforços para criar um modelo de roteamento de páginas com o Node Express!


Como diria um antigo mestre:
> *"Cedo ou tarde, você vai aprender, assim como eu aprendi, que existe uma diferença entre CONHECER o caminho e TRILHAR o caminho."*
>
> *Morpheus - The Matrix*

[NPM-image]: https://img.shields.io/npm/v/express?style=plastic
[node-url]: https://nodejs.org/en/
[npm-url]: https://www.npmjs.com/
[npm-bundle-size]:https://img.shields.io/bundlephobia/min/express?style=plastic
[NODE-image]: https://img.shields.io/node/v/npm?style=plastic
[wiki]: https://github.com/seunome/seuprojeto/wiki