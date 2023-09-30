# API para Biblioteca com NodeJs

Rápida descrição do objetivo de fazer esse projeto

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **API para Biblioteca com NodeJs**
| :label: Tecnologias | javascript
| :rocket: URL         | https://url-deploy.com.br
| :fire: Desafio     | https://url-do-desafio.com.br

<!-- Inserir imagem com a #vitrinedev ao final do link -->
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

## Endpoints da API
- GET /livros Retorna a lista de todos os livros disponíveis na livraria.
- GET /livros/{id} Retorna os detalhes de um livro específico com base no ID.
- POST /livros Adiciona um novo livro à livraria.
- PUT /livros/{id} Atualiza os detalhes de um livro existente com base no ID.
- DELETE /livros/{id} Remove um livro da livraria com base no ID.

