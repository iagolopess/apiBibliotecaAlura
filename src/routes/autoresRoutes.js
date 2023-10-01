/**
 * Rotas de Livros
 * Este módulo define as rotas relacionadas a livros na aplicação Express, utilizando o controlador AutorController.
 */
import express  from "express";
import AutorController from "../controllers/autorController.js";

const routes = express.Router();

/**
 * Rota para listar todos os livros.
 * Quando um cliente faz uma solicitação GET para "/livros", o método "listarLivros" do controlador AutorController é chamado.
 */
routes.get("/autores", AutorController.listarAutores);
routes.get("/autores/:id", AutorController.listarAutorPorId);
routes.post("/autores", AutorController.cadastrarAutor);
routes.put("/autores/:id", AutorController.atualizarAutorPorId);
routes.delete("/autores/:id", AutorController.excluirAutorPorId);

export default routes;