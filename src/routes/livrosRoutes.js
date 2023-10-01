/**
 * Rotas de Livros
 * Este módulo define as rotas relacionadas a livros na aplicação Express, utilizando o controlador LivroController.
 */
import express  from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

/**
 * Rota para listar todos os livros.
 * Quando um cliente faz uma solicitação GET para "/livros", o método "listarLivros" do controlador LivroController é chamado.
 */
routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/:id", LivroController.listarLivroPorId);
routes.post("/livros", LivroController.cadastrarLivro);
routes.put("/livros/:id", LivroController.atualizarLivroPorId);
routes.delete("/livros/:id", LivroController.excluirLivroPorId);

export default routes;