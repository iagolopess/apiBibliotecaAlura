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
    static async listarLivros(req, res){
        

        try {
            // Busca todos os livros no banco de dados.
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - Falha na requisição`,
            })
        }

    };


    static async listarLivroPorId(req, res){
        
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - Falha na requisição do livro`,
            })
        }

    };


    /**
     * Cadastra um novo livro.
     * @param {express.Request} req - O objeto de requisição HTTP contendo os dados do livro a ser cadastrado.
     * @param {express.Response} res - O objeto de resposta HTTP.
     */
    static async cadastrarLivro(req, res){
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
            res.status(500).json({
                message: `${erro.message} - Falha ao cadastrar livro`
            })
        }

    }

    static async atualizarLivroPorId(req, res){
        
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({
                message: `Livro Atualizado`
            });
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - Falha na atualização do livro`,
            })
        }

    };

    static async excluirLivroPorId(req, res){
        
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({
                message: `Livro excluido com sucesso`
            });
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - Falha ao excluir o livro`,
            })
        }

    };

    static async listarLivrosPorEditora (req, res){
        const editora = req.query.editora;

        try {
            const livrosPorEditora = await livro.find({ editora: editora });
            res.status(200).json(livrosPorEditora);
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - Falha na requisição`,
            })
        }
    }

}

export default LivroController;
