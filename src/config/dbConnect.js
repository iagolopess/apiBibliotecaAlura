/**
 * Módulo de Conexão com o Banco de Dados
 * Este módulo utiliza o Mongoose para conectar-se a um banco de dados MongoDB
 */
import mongoose from "mongoose";

/**
 * Função assíncrona para estabelecer uma conexão com o banco de dados.
 * @returns {mongoose.Connection} Uma instância da conexão com o banco de dados.
 */
async function connectDataBase(){
    // Conecta-se ao banco de dados usando a string de conexão fornecida em process.env.DB_CONNECTION_STRING.
    mongoose.connect(process.env.DB_CONNECTION_STRING);

    // Retorna uma instância da conexão com o banco de dados.
    return mongoose.connection;
}

// Exporta a função connectDataBase para que ela possa ser usada em outros módulos.
export default connectDataBase;
