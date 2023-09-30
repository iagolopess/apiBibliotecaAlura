/**
 * Inicialização da Aplicação
 * Este script inicia a aplicação Node.js configurando variáveis de ambiente e iniciando o servidor.
 */

import "dotenv/config"; // Carrega as variáveis de ambiente do arquivo .env
import app from "./src/app.js"; // Importa o módulo principal da aplicação

const PORT = 3000; // Porta lógica de comunicação a ser utilizada na API

/**
 * Inicia o servidor da aplicação na porta especificada.
 * @param {number} port - A porta em que o servidor deve escutar.
 */
app.listen(PORT, () => {
    console.log("Servidor escutando!");
})