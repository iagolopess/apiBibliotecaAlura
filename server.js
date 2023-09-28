import app from "./src/app.js";

const PORT = 3000; // Porta lógica de comunicação a ser utilizada na API

app.listen(PORT, () => {
    console.log("Servidor escutando!");
})