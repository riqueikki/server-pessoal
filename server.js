// Importa o módulo express
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Configurações iniciais
const app = express();
const PORT = 3000;

// Corrige caminhos para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware para servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, "public")));

// Rota principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Rota /about
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

// Rota /contact
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "contact.html"));
});

// Rota de API simples
app.get("/api/message", (req, res) => {
  res.json({ message: "Olá! Este é seu servidor pessoal com Node.js e Express 🚀" });
});

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
