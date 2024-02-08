/*********************************************************************************************************************************
 * Objetivo: Arquivo responsável pela validação, consistenciia de dados das requisições da API de Filme
 * Data: 01/02/2024
 * Autor: Paloma Vessoleck
 * Versão: 1.0
 *********************************************************************************************************************************/

//Import do arquivo DAO quue fará a comunicação com o banco de dados
const filmeDAO = require('../model/DAO/filmes.js')

//função para validar e inserir um novo filme 
const setInserirNovoFilme = async function(){

}

//função para validar e atualizar filme 
const setAtualizarFilme = async function(){

}

//função para excluir um filme 
const setExcluirFilme = async function(){

}

//função para retornar todos os filmes
const getListarFilmes = async function(){


    //criia o objeto json
    let filmesJson = {}

    //chama a função do DAO para retornar os dados da tabela de filme
    let dadosFilmes = await filmeDAO.selectAllFilmes();


    //validação para verificar see existem dados
    if (dadosFilmes){

    //cria o json para dvolver para o app
    filmesJson.filmes = dadosFilmes;
    filmesJson.quantidade = dadosFilmes.length;
    filmesJson.status_code = 200;
    return filmesJson;
    }else{
    return false
}
}

//função para buscar filme pelo ID
const getBuscarFilme = async function(){

}

module.exports = {
    setInserirNovoFilme,
    setAtualizarFilme,
    setExcluirFilme,
    getListarFilmes,
    getBuscarFilme
}