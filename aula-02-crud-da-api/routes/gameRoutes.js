// Endpoints (rotas) de Games
import express from 'express';
const gameRoutes = express.Router();
// Importando o controller
import gameController from '../controllers/gameController.js';

// Endpoint (rota) para listar todos os jogos
gameRoutes.get("/games", gameController.getAllGames)
//Endpoint (rota) para cadastrar um jogo
gameRoutes.post("/games",gameController.createGame)

//Endoint(rota) para deletar um jogo
gameRoutes.delete("/games/:id", gameController.deleteGame)

//Endoint(rota) para aletrar um jogo
gameRoutes.put("/games/:cid", gameController.UpdateGame)

export default gameRoutes;