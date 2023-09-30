# API para Biblioteca com NodeJs, Express e MongoDB (Versão PT-BR)

Este projeto tem como propósito servir de objeto de estudo para criação de API usando NodeJS com Express e MongoDB

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **API para Biblioteca com NodeJs**
| :label: Tecnologias | javascript
| :rocket: URL         | https://url-deploy.com.br
| :fire: Desafio     | https://url-do-desafio.com.br


![](https://www.ericeiramag.pt/wp-content/uploads/2021/02/bibliotecas.png#vitrinedev)

## Detalhes do projeto

Bem-vindo ao Projeto API para Biblioteca com NodeJs! Este é um projeto baseado em um curso da Alura que visa criar uma API em JavaScript para gerenciar operações CRUD (Create, Read, Update, Delete) em uma livraria virtual. Esta API é construída com o auxílio das bibliotecas Express.js e Nodemon para facilitar o desenvolvimento e a manutenção.

Funcionalidades Principais
Cadastro de Livros: Adicione novos livros à sua livraria com informações detalhadas, como título, autor, gênero, e ISBN.

Recuperação de Livros: Consulte a lista completa de livros disponíveis na livraria e obtenha detalhes específicos de cada livro.

Atualização de Livros: Atualize as informações de um livro existente, incluindo título, autor e outras propriedades.

Exclusão de Livros: Remova livros da livraria quando necessário.

## Pré-requisitos
Certifique-se de ter os seguintes requisitos instalados em seu ambiente de desenvolvimento:

Node.js: Necessário para executar o servidor da API.
Como Começar
Clone este repositório para o seu ambiente local.

Execute npm install para instalar todas as dependências necessárias.

Inicie o servidor da API com o comando npm start.

Acesse a API em http://localhost:3000 no seu navegador ou usando ferramentas como Postman para realizar as operações CRUD.

## Lista de dependencias
- npm install express (para instalar o Node Express)
- npm install nodemon@3.0.1 (para instalar a versão do Nodemon 3.0.1 usada no projeto)
- npm install mongodb (para poder executar a conexão com o mongodb)
- npm install mongoose@7.3.4 (para instalar as dependencias necessárias para rodar a conexão com o MongoDB)
## Endpoints da API
- GET /livros Retorna a lista de todos os livros disponíveis na livraria.
- GET /livros/{id} Retorna os detalhes de um livro específico com base no ID.
- POST /livros Adiciona um novo livro à livraria.
- PUT /livros/{id} Atualiza os detalhes de um livro existente com base no ID.
- DELETE /livros/{id} Remove um livro da livraria com base no ID.



# API for Library with Node.js, Express, and MongoDB (EN Version)

This project serves as a study resource for creating an API using Node.js with Express and MongoDB.

## Project Details

Welcome to the API for Library with Node.js Project! This is a project based on an Alura course that aims to create a JavaScript API for managing CRUD (Create, Read, Update, Delete) operations in a virtual library. This API is built with the help of Express.js and Nodemon libraries to simplify development and maintenance.

Key Features
Book Registration: Add new books to your library with detailed information such as title, author, genre, and ISBN.

Book Retrieval: Browse the complete list of books available in the library and get specific details for each book.

Book Update: Update the information of an existing book, including title, author, and other properties.

Book Deletion: Remove books from the library when necessary.

## Prerequisites
Make sure you have the following requirements installed in your development environment:

Node.js: Required to run the API server.

Getting Started

Clone this repository to your local environment.
Run npm install to install all the necessary dependencies.
Start the API server with the command npm start.
Access the API at http://localhost:3000 in your browser or use tools like Postman to perform CRUD operations.

## List of Dependencies
- npm install express (to install Node Express)
- npm install nodemon@3.0.1 (to install the specified version of Nodemon 3.0.1 used in the project)
- npm install mongodb (to enable the connection to MongoDB)
- npm install mongoose@7.3.4 (to install the necessary dependencies for MongoDB connection)

## API Endpoints
- GET /livros: Returns the list of all books available in the library.
- GET /livros/{id}: Returns the details of a specific book based on the ID.
- POST /livros: Adds a new book to the library.
- PUT /livros/{id}: Updates the details of an existing book based on the ID.
- DELETE /livros/{id}: Removes a book from the library based on the ID.