/**
 * Controlador de Livros
 * Este módulo define um controlador para operações relacionadas a livros, como listagem e cadastro.
 */
import { autor } from "../models/Autor.js";

class AutorController {
    
     /**
     * Lista todos os livros.
     * @param {express.Request} req - O objeto de requisição HTTP.
     * @param {express.Response} res - O objeto de resposta HTTP.
     */
    static async listarAutores(req, res){
        

        try {
            // Busca todos os livros no banco de dados.
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - Falha na requisição`,
            })
        }

    };


    static async listarAutorPorId(req, res){
        
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - Falha na requisição do autor`,
            })
        }

    };


    /**
     * Cadastra um novo autor.
     * @param {express.Request} req - O objeto de requisição HTTP contendo os dados do livro a ser cadastrado.
     * @param {express.Response} res - O objeto de resposta HTTP.
     */
    static async cadastrarAutor(req, res){
        
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({
                message: "Autor Criado com sucesso",
                livro: novoAutor
            });    
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - Falha ao cadastrar Autor`
            })
        }

    }

    static async atualizarAutorPorId(req, res){
        
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({
                message: `Autor Atualizado`
            });
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - Falha na atualização do autor`,
            })
        }

    };

    static async excluirAutorPorId(req, res){
        
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({
                message: `Autor excluido com sucesso`
            });
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - Falha ao excluir o autor`,
            })
        }

    };

}

export default AutorController;
