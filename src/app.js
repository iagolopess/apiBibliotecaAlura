import express from "express";
import connectDataBase from "./config/dbConnect.js";
import livro from "./models/Livro.js";

const conexao = await connectDataBase();

conexao.on("error", (erro) => {
    console.error("erro de conexao", erro);
})

conexao.once("open", () => {
    console.log("Conexao com o DB feita com sucesso!")
})

const app = express();
app.use(express.json());


function buscaLivro(id){
    return livros.findIndex(livro => {
        return livro.id === Number(id)
    })
}

app.get("/", (req, res) =>{
    res.status(200).send("Curso de node.js")
});

app.get("/livros", async (req, res) => {
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros);
});

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
})

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Registro criado com sucesso!");
})

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
})

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Registro deletado com sucesso!");
})

export default app;

