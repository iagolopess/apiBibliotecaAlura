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
    static listarAutores = async (req, res, next) => {
        
        try {
            // Busca todos os livros no banco de dados.
            const listaAutores = await autor.find({});
            if (listaAutores != null ) {
                res.status(200).json(listaAutores);
            } else {
                res.status(404).send({message: "Não foi possível encontrar os registros de autores"});
            }
            
        } catch (erro) {
            next(erro);
        }

    };


    static  listarAutorPorId = async (req, res, next) => {
        
        try {
            const id = req.params.id;

            const autorEncontrado = await autor.findById(id);
            
            if (autorEncontrado != null) {
                res.status(200).send(autorEncontrado);
            } else {
                res.status(404).send({message: "Id do Autor não localizado."});
            }
            
        } catch (erro) {
            next(erro);
        }

    };


    /**
     * Cadastra um novo autor.
     * @param {express.Request} req - O objeto de requisição HTTP contendo os dados do livro a ser cadastrado.
     * @param {express.Response} res - O objeto de resposta HTTP.
     */
    static cadastrarAutor = async (req, res, next) => {
        
        try {

            let autor = new autor(req.body);

            const novoAutor = await autor.save();
            res.status(201).json(novoAutor.toJSON());

        } catch (erro) {

            next(erro);
        
        }

    };

    static atualizarAutorPorId = async (req, res, next) => {
        
        try {
            const id = req.params.id;

            await autor.findByIdAndUpdate(id, {$set: req.body});
            
            res.status(200).json({
                message: "Autor Atualizado"
            });

        } catch (erro) {
            
            next(erro);
        
        }

    };

    static async excluirAutorPorId(req, res, next){
        
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({
                message: "Autor excluido com sucesso"
            });
        } catch (erro) {
            next(erro);
        }

    }

}

export default AutorController;
