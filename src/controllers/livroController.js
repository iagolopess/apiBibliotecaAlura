/**
 * Controlador de Livros
 * Este módulo define um controlador para operações relacionadas a livros, como listagem e cadastro.
 */
import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";

class LivroController {
    
    /**
     * Lista todos os livros.
     * @param {express.Request} req - O objeto de requisição HTTP.
     * @param {express.Response} res - O objeto de resposta HTTP.
     */
    static listarLivros = async (req, res, next) => {
        

        try {
            // Busca todos os livros no banco de dados.
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (erro) {
            next(erro);
        }

    };


    static listarLivroPorId = async (req, res, next) => {
        
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (erro) {
            next(erro);
        }

    };


    /**
     * Cadastra um novo livro.
     * @param {express.Request} req - O objeto de requisição HTTP contendo os dados do livro a ser cadastrado.
     * @param {express.Response} res - O objeto de resposta HTTP.
     */
    static async cadastrarLivro(req, res, next){
        const novoLivro = req.body;

        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = {
                ...novoLivro,
                autor: { 
                    ...autorEncontrado._doc
                }
            };
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({
                message: "Livro Criado com sucesso",
                livro: livroCriado
            });    
        } catch (erro) {
            next(erro);

        }
    }

    static async atualizarLivroPorId(req, res, next){
        
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({
                message: "Livro Atualizado"
            });
        } catch (erro) {
            next(erro);
        }

    }

    static async excluirLivroPorId(req, res, next){
        
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({
                message: "Livro excluido com sucesso"
            });
        } catch (erro) {
            next(erro);
        }

    }

    static async listarLivrosPorEditora (req, res, next){
        const editora = req.query.editora;

        try {
            const livrosPorEditora = await livro.find({ editora: editora });
            res.status(200).json(livrosPorEditora);
        } catch (erro) {
            next(erro);
        }
    }

}

export default LivroController;
