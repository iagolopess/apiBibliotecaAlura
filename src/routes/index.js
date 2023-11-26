/**
 * Rotas da Aplicação
 * Este módulo define as rotas da aplicação Express, incluindo uma rota padrão e as rotas relacionadas a livros.
 */
import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";

/**
 * Configura as rotas da aplicação.
 * @param {express.Application} app - A instância do aplicativo Express.
 */
const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de NodeJs"));
    // Usa o middleware express.json() para tratar solicitações com formato JSON.
    // Define as rotas relacionadas a livros usando o módulo "livrosRoutes".
    app.use(express.json(), livros, autores);
};

export default routes;