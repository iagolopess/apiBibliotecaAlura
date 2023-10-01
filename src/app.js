/**
 * Configuração do Aplicativo Express
 * Este módulo configura o aplicativo Express, conecta-o ao banco de dados e define rotas.
 */

import express from "express";
import connectDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";


// Realiza a conexão com o banco de dados usando a função connectDataBase.
const conexao = await connectDataBase();

// Configura um manipulador de evento para erros de conexão com o banco de dados.
conexao.on("error", (erro) => {
    console.error("erro de conexao", erro);
})

// Configura um manipulador de evento para quando a conexão com o banco de dados for aberta com sucesso.
conexao.once("open", () => {
    console.log("Conexao com o DB feita com sucesso!")
})

const app = express(); // Cria uma instância do aplicativo Express.
routes(app); // Define as rotas do aplicativo express

export default app;

