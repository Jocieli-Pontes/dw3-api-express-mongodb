// Controller de games
// O controller tratará as requisições do cliente
// Importando o service
import gameService from '../services/gameService.js';
//importando o objectID do mongodb
import { ObjectId } from 'mongodb';

// Função que irá tratar a requisição para LISTAR os jogos
const getAllGames = async (req, res) => {
    try {
        const games = await gameService.getAll()
        res.status(200).json({ games: games })
        // Cod. 200 - OK - Requisição feita com sucesso
    } catch (error) {
        console.log(error)
        // Tratando a resposta que api irá enviar em caso de erro
        res.status(500).json({ error: 'Ocorreu um erro ao listar os jogos. Erro interno do servidor.' })
    }
}
//função que ira tratar a requisição da cadastrar os jogos
const createGame =async(req, res)=>{
    try{
        //const title = req.body.title
        //const yaer = req.body.yaer
        //coletando dados enviados (formulario, da requisição, etc) e gravando nas variaveis
        const{title, year, platform, price}= req.body
        //enviando dadospara o Service cadastrar
        await gameService.Create(title, year,platform,price)
        res.status(201).json({message: "Jogo cadastrado com sucesso!"})
        //Cod. 201 (create) --> recurso criado com sucesso no servidor
    }catch(error){
        console.log(error);
        res.status(500).json({error:"Erro interno do servidor."});
    }
}

//função que trata a requisição para EXCLUIR um jogo
const deleteGame = async (req, res)=>{
    try{
        //coletando o id da rota
        const id = req.params.id;
        //fazendo a validação do objectId
        if (ObjectId.isValid(id)){
            await gameService.Delete(id)
            res.sendStatus(204)
            //cod 204 (no content) requisição bem sucedida, porem não há conteudo para retornar.
        }else{
            res.status(400).json({error:"Requsição mal formada, ID ivalido"})
            //Cod 400 Bad request
        }
    }catch(error){
        console.log(error);
        res.status(500).json({ error:"Erro interno do servidor"})
    }
}

//função que trata a requisição para Alterar um jogo
const UpdateGame = async(req, res)=>{
    try{
        //coletando a ID da rota
        const id = req.params.id
        //validando o objectId
        if (ObjectId.isValid(id)){
            //coletando os dados que serão alterados
            const {title, year, platform, price}= req.body
            //enviando os daados para o service
            await gameService.Update(id, title, year, platform, price)
            res.status(200).json({message: "Jogo atualizado com sucesso"})

        }else{
            res.status(400).json({error:"Requsição mal formada, ID ivalido"})
        }

    }catch(error){
        console.log(error)
        res.status(500).json({error: "Erro interno do servidor"})
    }
}
// Exportando as funções
export default { getAllGames,createGame, deleteGame,UpdateGame}