import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    editora: { type: String, required: true },
    preco: { type: Number },
    paginas: { type: Number }

},
    { versionKey: false } //Refere-se ao versionamento do Schema, se false não será versionado
);

// O primeiro parametro está relacionado a coleção no Banco de Dados e o segundo qual o Schema a ser usado
const livro = mongoose.model("livros", livroSchema);

export default livro;