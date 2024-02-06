/**
 * Definição do Schema e Modelo de Dados para Livros
 * Este módulo define um schema para livros usando o Mongoose e cria um modelo associado para interagir com o banco de dados.
 */

import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

// Define o schema para os documentos de livros
const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: [true, "Titulo é obrigatório"] },
    editora: { type: String, required: [true, "Editora é obrigatório"] },
    preco: { type: Number },
    paginas: { type: Number },
    autor: autorSchema

},
{ versionKey: false } // Desativa a criação automática do campo "__v" no documento
);

// Cria um modelo "livro" associado ao schema definido acima
const livro = mongoose.model("livros", livroSchema);

// Exporta o modelo "livro" para que possa ser usado em outras partes da aplicação
export default livro;