//importar o Express
import express from "express";
//carregando Express
const app= express();

//configuraçoes do Express
app.use(express.json());

//rota principal da API
app.get("/",(req, res)=> {
    //json que sera retornado pela API
    const games =[
        {
            title: "Fifa 2019",
            year:2019,
            platform: "X-box 360",
            price: 198
        },
        {
            title:"The Sims",
            year:2016,
            platform: "PC (Windows)",
        },
        {
            title: "CS Go",
            year:2012,
            platform:"PC (windows)",
            price: 89
        }
    ]
    //Configurando o retorno da Api
    res.status(200).json(games)
})



//iniciando o servidor da API
const port = 4000;
app.listen(port, (error)=> {
    if(error){
        console.log("Ocorreu um erro ao iniciar a API!!"+ error);
    }else{
        console.log("API iniciada com sucessso na porta"+ port);
    }
});