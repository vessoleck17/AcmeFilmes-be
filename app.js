/***************************************************************************
 * Objetivo: Desenvolver um projeto para a empresa ACME filmes
 * Autor: Paloma Vessoleck
 * Data: 25/01/24
 * Versão: 1.0
 *************************************************************************/


// Para criar uma API podemos utilizar o EXPRESS;
// npm install express --save -> É a biblioteca que vai gerenciar as aquisições da API;
// npm install body-parser --save -> É a biblioteca que vai manipular dados do corpo da aquisição (POST, PUT);
// npm install cors --save -> É responsavel pelas permissões (HEADER) de acesso das aquisições;


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


//endPoints

app.get('/v1/ACME_FILMES/filmes', cors(), async function(request, response, next){
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

app.get('/v1/ACME_FILMES/filmes/:id', cors(), async function(request, response, next){
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

app.listen('8080', function(){
    console.log('API funcionando!!')
})