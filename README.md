# Projeto de um Site, uma API e um App Mobile Utilizando NodeJS, React e React Native (JavaScript)
> Este projeto constitui na criação de um site, uma API transacional e um app mobile utilizando como plataforma o NodeJS.

[![NodeJS Badge](https://img.shields.io/badge/-NodeJS-green?style=flat-square&logo=node&logoColor=white&link=https://nodejs.org/en/)](https://nodejs.org/en/)
[![React Badge](https://img.shields.io/badge/-React-000?style=flat-square&logo=React&logoColor=white&link=https://pt-br.reactjs.org/)](https://pt-br.reactjs.org/)
[![React Native Badge](https://img.shields.io/badge/-React%20Native-blue?style=flat-square&logo=React&logoColor=white&link=https://reactnative.dev/)](https://reactnative.dev/)

Neste projeto JavaScript foi deesenvolvido um site, uma API e um app mobile para a plataforma digital de uma empresa fictícia (Supernova Tech), na qual é baseada no NodeJS, utilizando bibliotecas do [React](https://pt-br.reactjs.org/), [NextJS](https://nextjs.org/) e dos frameworks [Reactstrap](https://reactstrap.github.io/) e [Bootstrap](https://getbootstrap.com/).

Desta forma, a premissa é ter o NodeJS instalado para poder instalar as dependências e bibliotecas, além de suas derivadas do React. Outra configuração a ser observada é que o React não é tão otimizado pelos buscadores de sites, mas o Next JS possuí a funcionalidade Server-Side Rendering (SSR) , além de permitir gerar sites estáticos para aplicativos web baseados em React, permitindo construir páginas HTML otimizadas para buscadores.

Já o Bootstrap 4 permite que o projeto seja responsivo para dispositivos móveis na web, com uma gama de componentes para a construção de páginas web, com recursos como CSS, XHTML e JS, permitindo a alta produtividade.

![](/site/assets/Screenshot_2021-03-04%20Supernova%20Tech.png?w=400) 


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
> As bibliotecas presentes nesta tabela também podem ser vistas no arquivo ``package.json``, em *dependencies*.


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
Com o projeto baixado em sua máquina entre no diretório ``site/``, ``api``, e ``app_supernova`` e execute o seguinte comando em cada uma delas, para permitir a instalação de dependências:
```sh
npm install
```
Após a instalação das dependências, para executar o projeto execute:
```sh
npm run dev
```

E abra o projeto (site) em <http://localhost:3000>

Para executar a ``API``, no diretório da aplicação, execute o seguinte comando:
```sh
nodemon app.js
```

Já para executar o ``APP`` para visualizá-lo em seu dispositivo físico ou realizar a vitualização de um dispositivo com o Android Studio, no diretório da aplicação, execute o seguinte comando:
```sh
npx react-native run-android
```
O comando com o parâmetro start é mais rápido, mas este garante que todas as dependências serão aplicadas. 

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
Também foi incluído o framework Reactstrap, pois o Reactstrap não inclui bibliotecas css que utilizamos no Bootstrap, onde também é utilizado o parâmetro ``save`` para inserir a dependencia ao projeto. Desta forma, executamos o seguinte comando:
```sh
npm install --save reactstrap react react-dom
```

O React foi essencial para utilizar componentes interativos em conjunto com o ReactDOM, permitindo minimizar eventuais erros que poderiam ocorrer na criação das interfaces do usuário (User Interface - UI). Isto porque seus componentes são partes lógicas que descrevem uma parte específica da interface do usuário.

Para incluir o framework ao projeto foi criado o arquivo de referência ``_app.js`` (sim tem um underscore na frente) e importado sua biblioteca no diretório ``pages/``.
Esta informação pode ser obtida pelo site do [NextJS](https://nextjs.org/docs/basic-features/built-in-css-support)
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

## Sobre os Arquivos Models
Os arquivos Model são responsáveis por manipular os dados entre o banco de dados e as aplicações, além de gerenciar todas as transações CRUD, onde no site do [Mongoose](https://mongoosejs.com/docs/models.html) existe uma vasta documentação sobre o tema.
Na Model foi inserida as constantes para implementar o mongoose e a Schema, que é a coleção de tabela relacionada ao banco de dados. Desta forma, referenciados para a constante Schema a estrutura de dados a serem manuseadas por ela, indicando o parâmetro name do componente mais o valor a ser atribuido ou enviados todo o corpo de um formulário para o banco através do ``req.body`` no Express.

Para conseguir trabalhar com aplicativos externos é necessário instalar a dependência [``Cors``](https://www.npmjs.com/package/cors), que é um pacote NodeJS/Express que fornece um _middleware_ para tratamento de operações encaminhados pelas _requests_ possibilitando segurança.
Desta forma, após realizar o importação do Cors ao arquivo principal ``app.js`` foi utilizado a função use() para listar todos os heards e habilitar a aplicação para utilizar o formato ``JSON``.
```sh
app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Autorization");
    app.use(cors());
    next();
})
```

Desta maneira que nossa API está preparada para trabalhalhar com as nossas aplicações.

## Transações entre MongoDB e Site através da API
O conteúdo do site é estático, desta forma, para torná-lo dinâmico foi conectado a API a fim de permitir atualizá-lo. Desta maneira, foi consultada a documentação do Next JS (utilizado para criar o site) para estudar sobre o método getServerSide, na qual retorna um objeto do tipo getServerSideProps, a fim de ser utilizado quando precisamos que a página seja renderizada no lado do servidor, e uma coleção de dados, que foi nomeada como ``data``. Isto possibilita que algoritmos buscadores identifiquem o conteúdo das páginas a serem renderizadas ao cliente.
```sh
export async function getServerSideProps(){
    const res = await fetch(`http://localhost:8080/home`);
    const data = await res.json();

    console.log(data);

    return { props : { data }};
}
```

Para passar os dados coletados pela API para as páginas, foi atribuido a coleção ``data`` na qual foi passada como parâmetro a ``function Home()``, sendo que toda coleção deve ser passada com a abertura e fechamento de chaves.
```sh
function Home({ data }){
```

Desta maneira, foi possível substituir todo o conteúdo estático ao alterá-lo pelo objeto de coleção a fim de acessar seus atributos para disponibilizar o conteúdo as páginas, substituindo seu atual conteúdo com dados provenientes do banco de dados MongoDB. Para este fim, foi acessada a coleção de dados (data), passando o nome da entidade (home) e o atributo correspondente aos campos da entidade (ptfTitulo e ptfSubTitulo), conforme parte da página atualizada substituindo o conteúdo do Título e Subtítulo no código abaixo, repetindo com os demais conteúdo.
```sh
<div>
    <h2 className="display-3">{data.home.ptfTitulo}</h2>
    <p className="lead pb-4">
        {data.home.ptfSubTitulo}
    </p>
</div>
```

Mas para a página que contém um formulário é um pouco diferente, nela foi utilizado um componente do ``React`` denominado de ``useState``.

Foram criados duas funções para trabalharem com o conteúdo do formulário na qual são passadas para constantes que recebem o contexto da página e outra função de obtem os dados e repassam para o cliente, sendo que a primeira para iniciar os componentes do formulário com o conteúdo "em branco", onde posteriormente, através da function ``setContato`` recebe os dados inseridos aos componentes do formulário. Já a segunda, passa o estado o processo de envio dos dados da API para o banco de dados ao cliente através do protocolo HTTP.
```sh
const [contato, setContato] = useState({
    txtNome: '',
    txtEmail: '',
    txtTel: '',
    txtProj: '',
});

const [response, setResponse] = useState({
    formSave: false,
    type: '',
    message: ''
});
```

Para que a primeira função funcione, foi passada outra função como parâmetro como foi dito anteriormente, esta função recebe os dados que são inseridos aos componentes do formulário, na qual também é repassada para uma constante ``onChangeInput``, sendo que é criada uma coleção ``contato`` onde são coletados todos os parâmetros passados a um formulário, na qual mapeia todos os componentes presentes através da passagem das propriedades *name* (``e.target.name``) e (``e.target.value``), que retornam o nome do componente e o valor atribuído a ele, respectivamente.
```sh
const onChangeInput = e => setContato({...contato, [e.target.name]:e.target.value});
```
Mas para que isto seja possível, foi necessário passar a constante ``onChangeInput`` como parâmetro do atributo ``onChange`` de todos os componentes presentes do formulário. Este atributo indica que quando houver alteração do componente a função deve ser executada, consequentemente, invocando o useState do React.

Já a segunda função, como dito anteriormente, informa o estado do formulário para o cliente, além de realizar o procedimento de integrar as informações ao banco de dados através da API.
```sh
const sendContato = async e => {
    e.preventDefault();
    console.log(contato);

    setResponse({formSave : true});

    try{
        const res = await fetch('http://localhost:8080/contato', {
        method: 'POST',
        body: JSON.stringify(contato),
        headers: {'Content-Type': 'application/json'}
        });

        const resEnv = await res.json();
        if(resEnv.error){
            setResponse({
                formSave: false,
                type: 'error',
                message: resEnv.message
            });
        } else {
            setResponse({
                formSave: false,
                type: 'success',
                message: resEnv.message
            });
        }
    }catch(err){
        setResponse({
            formSave: false,
            type: 'error',
            message: "ERRO: Não foi possível enviar o formulário!"
        });
    }
}
```
A function ``sendContato`` que é responsável por repassar os dados para a API e tratar o conteúdo para ser devolvida a requisição encaminhada do cliente. A constante ``res`` aguarda o retorno da API e trata como deve ser estruturado o conteúdo. Já a constante ``resEnv`` verificará como o conteúdo foi "absorvido" pelo banco de dados. Desta forma, na sequencia é validada se o ``Response`` foi retornado erro ou se foi instanciada com sucesso. Além disso, caso não haja uma resposta da API, consequentemente retornando erro, também e tratada uma resposta ao cliente.

Para que o usuário não haja que sua requisição não foi enviada e fique clicando por mais de uma vez no botão de "Adicionar", responsável por enviar a requisição do cliente, foi implementado uma checagem utilizando a função ``response`` que possui o método ``formSave``, que valida se o formulário foi salvo ou não, onde este valor recebe o valor ``false`` atribuída pela segunda function useState, sendo utilizado uma condição ternária para habilitar ou não o componente ``Button`` até o retorno da API. 
```sh
{response.formSave ? <Button type="submit" outline color="danger" disabled >Enviando...</Button> :
                     <Button type="submit" outline color="secondary">Enviar</Button>}
```
## Criando uma Interface Responsiva para Dispositivos Móveis com React Native
Antes de mais nada, é necessário ter a IDE Android Studio para implementar o projeto em React Native. Além disso, certifique-se que o SDK Manager estejam habilitados as seguintes opções de configuração:
* Android SDK Platform
* Intel x86 Atom_64 System Image ou APIs do Google Intel x86 Atom System Image

Para saber como você pode verificar estas configurações em sua IDE consulte a documentação oficial do [React Native](https://reactnative.dev/docs/environment-setup). Também é aconselhado que a ferramenta [Watchman](https://facebook.github.io/watchman/docs/install.html) seja instalada para obter um melhor desempenho e maor compatibilidade em casos de projetos muito complexos, na documentação terá os passos para sua implementação.

O React Native possui uma interface de linha de comando integrada, que pode utilizado pra gerar um novo projeto. Desta forma, para criar a estrutura do projeto foi utiliando o comando abaixo no diretório raiz do projeto, denominado ``app_supernova``. 
```sh
npx react-native init app_supernova
```
> É possível acessá-lo sem instalar nada globalmente usando o npx, que vem com o Node.js.

Para executar o projeto do APP, no diretório da aplicação, digite o seguinte comando:
```sh
npx react-native run-android
```

> Este comando executa o Metro Bundler que é o servidor Android para execução da aplicação.

Foi criado o diretório ``src/``, por conversão está pasta é obrigatória para utilizar conteúdo que venha a ser personalizado. e este diretório foram criados dois arquivos, o routes.js e o index.js. O primeiro é para configurar as rotas até as páginas que foram desenvolvidas, enquanto, o segundo substituíra o arquivo index padrão da aplicação.
Para isto, no arquivo gerado pelo ``React Native`` que possuí o nome de *index.js*, que está no diretório raiz, em um de seus  importes é apontado o arquivo de execução da aplicação, denominado ``App.js``, arquivo este que também criado automaticamente ao estruturar o diretório da aplicação. Desta forma, foi modificado este apontamento para o outro arquivo index, mas este personalizado no diretório ``src/``. Abaixo segue trecho do arquivo index.js (raiz) modificado.
```sh
import App from './src'
```
Já no arquivo index customizado é o arquivo de referência da aplicação, enquanto o arquivo rotas é estruturado para invocar as demais páginas da aplicação que serão repassadas para o index customizado.



/opt/android-studio-4.1/android-studio/jre

/home/willdkdias/Android/Sdk

reactnative.dev/docs/environment-setup [npm install @react-navigation/native]

https://reactnative.dev/docs/getting-started [npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view]




O exemplo a seguir mostra como usar o comando kvm-ok:

React Native possui uma interface de linha de comando integrada. Em vez de instalar e gerenciar uma versão específica da CLI globalmente, recomendamos que você acesse a versão atual em tempo de execução usando npx, que vem com o Node.js. Com npx react-native <command>, a versão estável atual do CLI será baixada e executada no momento em que o comando for executado.

Se você instalou recentemente o Android Studio, provavelmente precisará criar um novo AVD. Selecione "Criar dispositivo virtual ...", em seguida, escolha qualquer telefone da lista e clique em "Avançar" e selecione a imagem Q API Nível 29.

     Recomendamos configurar a aceleração da VM em seu sistema para melhorar o desempenho. Depois de seguir essas instruções, volte para o AVD Manager.

Clique em "Avançar" e depois em "Concluir" para criar seu AVD. Neste ponto, você deve ser capaz de clicar no botão de triângulo verde próximo ao seu AVD para iniciá-lo e, em seguida, prosseguir para a próxima etapa.


## Agradecimentos
Obrigado por ter acompanhado meus esforços para criar um Projeto com base no NodeJS, React e React Native! Espero que tenha curtido :octocat:


Como diria um antigo mestre:
> *"Cedo ou tarde, você vai aprender, assim como eu aprendi, que existe uma diferença entre CONHECER o caminho e TRILHAR o caminho."*
>
> *Morpheus - The Matrix*
