import express from "express";


const host = "0.0.0.0";
const porta = 3000; // identifica a nossa a aplicação sendo a 3000
const app = express();// comunica pelo htpp

function paginaInicial(requisicao,resposta){

    resposta.send('<h1>seja bem vindo</h1>');
}
app.get("/", paginaInicial);


app.listen(porta, host, () =>  {
    console.log("servidor em execução: http://" + host + ":" + porta);
});