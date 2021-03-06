# Trabalhando com Express (JavaScript)
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


## Sobre a Implementação do Site


// Obtido a importação do Framework (CSS) em: https://reactstrap.github.io/
```sh
import 'bootstrap/dist/css/bootstrap.min.css';
```

// Obtido função padrão do Next em: https://nextjs.org/docs/basic-features/built-in-css-support
```sh
export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }
```

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
Para incluir o framework ao projeto foi criado o arquivo de referência ``_app.js`` (sim tem um underscore na frente) e importado sua biblioteca no diretório ``pages/``.
Esta informação pode ser obtida pelo site do [Reactstrap](https://reactstrap.github.io/)
```sh
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }
```
A função ``MyApp`` permite o uso de componentes importados nas páginas JS, obtido no site do [NextJS](https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet) no tópico *Adicionando Estilos Globalmente*.

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