# Projeto de um Site, uma API e um App Mobile (JavaScript)
> Este projeto constitui na criação de um site, uma API transacional e um app mobile utilizando como plataforma o NodeJS.

[![NPM Version][NPM-image]][npm-url]
[![Bundle Size][npm-bundle-size]][npm-url]
[![NODE Version][NODE-image]][node-url]

Neste projeto JS foi criado um site, uma API e um app mobile para a plataforma de digital de uma empresa fictícia (Supernova Tech), na qual é baseada no NodeJS, utilizando bibliotecas do [React](https://pt-br.reactjs.org/), [NextJS](https://nextjs.org/) e dos frameworks [Reactstrap](https://reactstrap.github.io/) e [Bootstrap](https://getbootstrap.com/).

Desta forma, a premissa é ter o NodeJS instalado para poder instalar as bibliotecas e suas derivadas do React, pois o React não é tão otimizado pelos buscadores de site, mas o Next JS possuí a funcionalidade Server-Side Rendering (SSR) e a geração de sites estáticos para aplicativos web baseados em React, permitindo construir páginas HTML otimizadas para buscadores.

Já o Bootstrap 4 permite que o projeto seja responsivo para dispositivos móveis na web, com uma gama de componentes para a construção de páginas web, com recursos como CSS, XHTML e JS, permitindo a alta produtividade.

![](/site/assets/Screenshot_2021-03-04 Supernova Tech.png?w=283) 


## Versões dos Programas Utilizados no Projeto (Site)
Segue na tabela abaixo, as versões dos programas e bibliotecas utilizadas para o desenvolvimento do site.
|     Programa    |   Versão   |
|-----------------|------------|
| NodeJS          |  v10.19.0  |
| NPM             |  v6.14.4   |
| NextJS          |  v10.0.7   |
| React/React-DOM |  v17.0.1   |
| Reactstrap      |  v8.9.0    |
| Bootstrap       |  v4.6.0    | 

As bibliotecas presentes nesta tabela também podem ser vistas no arquivo ``package.json``, em *dependencies*.


## Programas Necessários Fundamentais para Compilação do Projeto
É necessário antes de tudo ter o NodeJS instalado em sua máquina, caso não, abra o seu terminal e digite o comando:
```sh
sudo apt install nodejs
```

Também é necessário possuir um gerenciador de pacotes JS na máquina, onde o mais comum utilizado é o NPM. Desta forma, caso seja necessário instalá-lo execute o seguinte comando no terminal:
```sh
sudo apt install npm
```

Agora instalamos o Nodemon que é uma ferramenta que auxilia o desenvolvimento de aplicativos baseados em NodeJS, reiniciando automaticamente o aplicativo quando ocorre mudanças nos arquivos no diretório monitorado. Desta forma, para instala-lo digite o comando:
```sh
sudo npm install -g nodemon
```

O parâmetro ``-g`` permite executá-lo de modo global em sua máquina, desta forma, também em seus projetos. Inclusive o ideal é reiniciar a máquina após sua instalação.

## O Que É Necessário para Executar o Projeto Baixado
Com o projeto baixado em sua máquina entre no diretório ``site/`` e execute o seguinte comando para permitir a instalação de dependências:
```sh
npm install
```
Após a instalação das dependências, para executar o projeto execute:
```sh
npm run dev
```

E abra o projeto (site) em <http://localhost:3000>


## Etapas para Executar este Projeto na Máquina
Primeiro se faz necessário ter o Node JS instalado na maquina. Desta forma, para verificar se o host possui ele instalado execute o comando:

```sh
node -v
```  

Caso verificado que não existe o retorno da versão do Node, execute o seguinte comando para instalá-lo:

```sh
sudo apt install nodejs
```


## Inclusão do Framework Bootstrap ao Projeto
Para incluir o framework Bootstrap 4 para tornar o site responsivo, permitindo um layout moldado a dispositivos móveis, precisamos incluir os seguintes comandos:
```sh
npm install --save bootstrap
```

O parâmetro ``save`` permite que seja inserida a dependencia ao projeto. Isto é comprovado ao abrir o arquivo ``package.json``.
Também foi incluído o framework Reactstrap, pois o Bootstrap não inclui bibliotecas css, onde também é utilizado o parâmetro ``save`` para inserir a dependencia ao projeto. Desta forma, executamos o seguinte comando:
```sh
npm install --save reactstrap react react-dom
```

O React foi essencial para utilizar componentes interativos em conjunto com o ReactDOM, permitindo minimizar eventuais erros que poderiam ocorrer na criação das interfaces do usuário (User Interface - UI). Isto porque seus componentes são partes lógicas que descrevem uma parte específica da interface do usuário.

Para incluir o framework ao projeto foi criado o arquivo de referência ``_app.js`` (sim tem um underscore na frente) e importado sua biblioteca no diretório ``pages/``.
Esta informação pode ser obtida pelo site do [Reactstrap](https://reactstrap.github.io/)
```sh
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }
```
A função ``MyApp`` permite o uso de componentes importados nas páginas JS, obtido no site do [NextJS](https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet) no tópico *Adicionando Estilos Globalmente*.

 Depois de todos estes passos, para conseguir utilizar todos os componentes necessários para a construção das páginas, foi necessário realizar os importes ``import`` a biblioteca. Por exemplo, para utilizar o [React](https://reactstrap.github.io/) na página foi utilizado a seguinte linha de comando:
 ```sh
 import React from 'react';
 ```

 Já para importarmos componentes do reactscrap foi utilizada a linha de comando:
 ```sh
 import { Jumbotron, Button, Container } from 'reactscrap';
 ```

 Onde entre as chaves listamos todos os componentes que foram utilizados na construção da página web, onde no caso do React, ele se concentra em renderizá-las, proporcionando um foco especial no projeto de UI.


# O Desenvolvimento da API
> A função da API é de ser o intermediário entre o site, o aplicativo móvel e o banco de dados.

Foi continuado o uso do NodeJS para a implementação, mas desta vez, foi para construção de uma *Application Programming Interface* (API). Ela será responsável pela integração com o banco de dados, desta forma, ela que irá receber as requisições e devolver as respostas correspondentes as requisições.

## O Que É Necessário para Executar o Projeto Baixado
Com o projeto baixado em sua máquina entre no diretório ``API/`` e execute o seguinte comando para permitir a instalação de dependências:
```sh
npm install
```
Após a instalação das dependências, para executar o projeto execute:
```sh
nodemon app.js
```

E abra o projeto (API) em <http://localhost:8080>

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

Neste arquivo também consta a inclusão do [MongoDB](https://www.mongodb.com/cloud/atlas/) como o banco de dados da API, mas antes incluimos sua dependencia ao arquivo package.json utilizando o seguinte comando:
```sh
npm install --save mongodb
```
> Caso apresente erro em sua execução, repita o comando para que ele realize o processo novamente

Desta forma, foi implementada o driver do MongoDB e as dependencias foram aplicadas ao projeto. Na qual, na sequencia foi inserido uma segunda dependência relacionada ao MongoDB, denominada de mongoose, que é uma ferramenta que traduz os registros que vem do banco de dados para um objeto JavaScript (Transacional) para permitir o uso pela aplicação. O comando fornecido foi:
```sh
npm install --save mongoose
```
> Caso apresente erro em sua execução, repita o comando para que ele realize o processo novamente

Assim foi incluído o ``mongoose`` no projeto ao mapeá-lo em uma constante no app.js.
```sh
const mongoose = require('mongoose');
```

E para concluir, foi adicionado o método para conexão inserindo os parametros para conexão com o banco de dados na nuvem (MongoDB Atlas)
```sh
mongoose.connect(
    'mongodb+srv://<username>:<password>@cluster0.<idcluster>.mongodb.net/<databaseName>?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology:true}).then(() => {
        console.log("Conexão com o MongoDB realizada com sucesso!");
    });
```
> Substitua os parâmetros ``<username>``, ``<password>`` e ``<databaseName>`` com os parâmetros de seu banco de dados

## Sobre o Uso do Banco de Dados NoSQl (MongoDB)
O banco de dados utilizado para criação deste projeto foi o MongoDB Atlas, que é um DBaaS (Banco de Dados como Serviço), oferecido pela MongoDB. Por ser um serviço, o foco fica em administrar os dados armazenados e seu trafego CRUD, pois toda a infraestrutura e manutenção, assim como, a segurança da informação fica por conta da empresa MongoDB.



Foi adquirido a camada M0 (Free Tier Cluster) do MongoDB Atlas, que é o serviço gratuito (e limitado) para o nosso projeto. Segue na tabela abaixo as caracteristicas deste serviço:
|       Configuração        |                                   Limitações                              |
|---------------------------|---------------------------------------------------------------------------|
|   Provedor *Cloud*        |   Cluster de camada MO só podem ser implantados em um conjunto específicos de regiões na Amazon Web Services [(AWS)](https://aws.amazon.com/pt/free/)        | 
|   Storage Engine          |   Atlas utiliza MongoDB 4.4 para cluster M0                               |
|   Fator de Replicação     |   O fator é definido como 3 *nodes* (nós) e não pode ser modificado para o serviço de camada M0                                               |
|   Backup                  |   Não é habilitado a opção de backup no serviço de camada M0              |
|   Encriptação de REST     |   Não é permitido o uso de Administração de Chaves Personalizadas         |
|   API Access              |   Não é permitido modificar ou configurar o cluster MO usando endpoint da API Clusters                                                         |
|   Autenticação            |   Os métodos permitidos são Password (SCRAM-SHA1), X.509 Certificates e AWS IAM                                                                 |
|   Conexões                |   Tem no máximo de 500 conexões                                           |
|   Database e Collections  |   Tem no máximo 100 databases e 500 Collections no total                  |
|   Transferência de Dados  |   M0 limita o total de dados transferidos (input/output) do cluster em um período contínuo de 7 dias. Na qual o serviço tem um taxa de 10 GB (IN) e 10 GB (OUT) por período                             |
|   Throughput              |   Operações máximas de 100 por segundo                                    |


O serviço oferece suporte para deploy de ambientes em três provedores de nuvem:
* AWS,
* Google Cloud Plataform,
* Microsoft Azure.
> Para este projeto foi selecionado o AWS, pois a camada M0 só é permitida por este provedor.

Ao conectar a plataforma são disponibilizadas três formas de realizar a conexão:
* via linha de comando - Mongo Shell,
* via aplicativo - Driver MongoDB nativo,
* via Recurso Gráfico - Interface MongoDB Compass.

Para realizar a conexão ao Cluster em qualquer uma delas é fornecido uma *String Connection*, na qual é só copiar e após a validação fornecer a senha cadastrada para o usuário. 
> Para conectar ao serviço na nuvem, é necessário ter um Domain Name System (DNS) público para que seja resolvida a rota para o serviço. Desta forma, configure seu dispositivo ou o roteador na qual administra sua rede com o DNS Publico do Google.




não é necessário :

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