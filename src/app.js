import express from "express";

const app = express();
app.use(express.json());

const livros = [
    {
        id: 1,
        titulo: "O senhor dos Anéis"
    },
    {
        id: 2,
        titulo: "O hobbit"
    }
]

app.get("/", (req, res) =>{
    res.status(200).send("Curso de node.js")
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
})

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Registro criado com sucesso!");
})

export default app;