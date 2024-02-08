/***************************************************************************
 * Objetivo: Desenvolver um projeto para a empresa ACME filmes
 * Autor: Paloma Vessoleck
 * Data: 25/01/24
 * Versão: 1.0
 *************************************************************************/

/*
    Para realizar o acesso a Banco de Dados precisamos instalar algumas bibliotecas:
        - SEQUELIZE  - uma biblioteca mais antiga
        - PRISMA ORM - umaa biblioteca mais atual (será utilizada no projeto)
        - FASTFY ORM - uma biblioteca mais atual
 */


/*
    Para criar uma API podemos utilizar o EXPRESS;
        npm install express --save -> É a biblioteca que vai gerenciar as aquisições da API;
        npm install body-parser --save -> É a biblioteca que vai manipular dados do corpo da aquisição (POST, PUT);
        npm install cors --save -> É responsavel pelas permissões (HEADER) de acesso das aquisições;
*/

/*
    Para instalar o PRISMA:
        - npm install prisma --save (irá realizar a conexão com o banco de dados)
        - npm install @prisma/client --save (responsavel por executar os scripts SQL no banco de dados)
        
        Após a instalação das bibliotecas, devemos inicializara o prisma no projeto
        - npx prisma init (inicializa o prisma)
*/

// Import das biblioteca para criar a API
 const express = require('express')
 const bodyParser = require('body-parser')
 const cors = require('cors')


 // Criando um objeto para manipular as requisições da API
 const app = express()


 // Request -> Entrada de algum dado na API
// Response -> Saida (return) de algum dado na API
// Next -> 

// Função para manipular as restrições da API
app.use((request, response, next) =>{

    // Permite especificar quem podera acessar a API ('*' = Liberar acesso público, 'IP' = Liberar acesso apenas para aquela maquina);
    response.header('Access-Control-Allow-Origin', '*')

    // Permite especificar como a API, sera requisitada ('GET', 'POST', 'PUT' e 'DELETE')
    response.header('Access-Control-Allow-Methods', 'GET')

    // Ativa as confgurações de cors
    app.use(cors())


    next()
})

/************************* Import dos arquivos da controller do projeto **************************** */
const controllerFilmes = require('./controller/controller_filmes')


//endPoints


//endpoint versão 1.0 - retorna todos os filmes do arquivo filmes.js
    //periodo de funcionamento: 01/24 até 02/24
app.get('/v1/ACME_FILMES/filmes', cors(), async function(request, response){
    let controleAcmeFilmes = require('./controller/function')
    let ListaFilmes = controleAcmeFilmes.getListaFilmes()

    if(ListaFilmes){
        response.json(ListaFilmes)
        response.status(200)
    }else{
        response.status(404)
        response.json({erro:'Item não encontrado'})
    }
})

app.get('/v1/ACME_FILMES/filmes/:id', cors(), async function(request, response){
    let controleAcmeFilmes = require('./controller/function')
    let filmeById = controleAcmeFilmes.getFilmeById(2)
    let id = request.params.idFilmes

    if(filmeById){
        response.json(filmeById)
        response.status(200)
    }else{
        response.status(404)
        response.json({erro:'Item não encontrado'})
    }
})

//endpoint versão 2.0 - retorna tods os filmes do banco de dados
    //periodo de fucionamento: 02/24
app.get('/v2/ACME_FILMES/filmes', cors(), async function(request, response){

    //chama a função da controller para retornar oos fimes
    let dadosFilmes = await controllerFilmes.getListarFilmes();


    //validação para retornar o JSON dos filmes ou retornar 404
    if(dadosFilmes){
        response.json(dadosFilmes)
        response.status(200)
    }else{
        response.json({message: 'Nenhum registro foi encontrado'})
        response.status(404)
    }
})

app.listen('8080', function(){
    console.log('API funcionando!!')
})