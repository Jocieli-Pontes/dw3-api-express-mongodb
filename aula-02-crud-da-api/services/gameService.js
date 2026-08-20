// Serviços de Games
// Aqui será inserido os métodos para Ler, cadastrar, Alterar e Excluir games

// Importando o Model
import Game from "../models/Games.js"

class gameService {
    // Serviço para ler os jogos
    async getAll() {
        // Tentativa da promessa (sucesso)
        try {
            //  o método .find() do mongoose busca registros
            const games = await Game.find()
            return games
            // Caso ocorra um erro será executado o catch
        } catch (error) {
            console.log(error)
        }
    }
    //metodo para cadastrar jogos
async Create(title, year, platform, price){
try{
    //Enviando os dados a serem cadastrados para o Model
    const newGame = new Game({
        //title: title,
        title,
        year, 
        platform,
        price
    });
    //aguardar a operação de cadastro
    await newGame.save(); // .save() é o metodo do mongose para cadastrar 
}catch(error){
    console.log(error);
}
}

//metodo para excluir um jogo
async Delete(id){
    try{
        await Game.findByIdAndDelete(id)
        //busca um registro pelo id e deleta
        console.log(`O jogo com a id ${id} foi deletado.`)
    }catch(error){
        console.log(error)
    }
}
//medodo para alterar um jogo

async Update(id, title, year, platform, price) {
    try{
        await Game.findByIdAndUpdate(id,{
            title,
            year,
            platform,
            price
        })
        console.log(`O jogo com a id ${id} foi alterado.`)
    }catch(error){
        console.log(error)
    }
}


//essa ultima chave encerra a classe
}

// Exportando a classe
export default new gameService()

