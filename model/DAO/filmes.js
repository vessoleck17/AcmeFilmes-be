/*********************************************************************************************************************************
 * Objetivo: Arquivo responsável pelo acesso ao Banco de dados MySQL, aqui faremos o CRUD na tabela de filmes
 * Data: 01/02/2024
 * Autor: Plaloma Vessoleck
 * Versão: 1.0
 *********************************************************************************************************************************/

//Import da biblioteca do prisma client para manipular scripts SQL
const {PrismaClient} = require('@prisma/client');

//Instancia da classe PrismaClient
const prisma = new PrismaClient();

//função para inserir um filme no Banco de dados
const insertFilme = async function(){

}

//função para atualizar um filme no banco de dados
const updateFilmes = async function(){

}

//função para deletar um filme do banco de dados
const deleteFilme = async function(){

}

//função para listar todos os filmes do banco de dados
const selectAllFilmes = async function(){

    let sql = 'select * from tbl_filme';


    //$queryRawUnsafe(sql)
    //$queryRaw('select * from tbl_filme')

    //Executa o script sql no banco de dados e recebe o retorno dos dados
    let rsFilmes = await prisma.$queryRawUnsafe(sql);

    //validação para retornar os dados
    if(rsFilmes.length > 0)
    return rsFilmes;
    else 
    return false;

}

//função para buscar um filme no banco de dados filtrando pelo id
const selectByIdFilme = async function(){

}

module.exports = {
    insertFilme, 
    updateFilmes, 
    deleteFilme, 
    selectAllFilmes, 
    selectByIdFilme
}