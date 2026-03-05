const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8081;

// Middleware para processar dados de formulário
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Habilita CORS para permitir requisições do HTML
app.use(cors());

// Rota GET para testar se o servidor está funcionando
app.get('/', (req, res) => {
    res.send('Servidor está rodando! 🚀');
});

// Rota POST para receber os dados do formulário
app.post('/register', (req, res) => {
    const { name, email } = req.body;
    
    console.log('📩 Dados recebidos:');
    console.log(`Nome: ${name}`);
    console.log(`Email: ${email}`);
    
    // Aqui você pode salvar no banco de dados, enviar email, etc.
    
    // Retorna uma resposta HTML com os dados recebidos
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Cadastro Realizado</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    max-width: 600px;
                    margin: 50px auto;
                    padding: 20px;
                    background-color: #f0f0f0;
                }
                .success-box {
                    background-color: #4CAF50;
                    color: white;
                    padding: 20px;
                    border-radius: 8px;
                    text-align: center;
                }
                .info {
                    background-color: white;
                    padding: 20px;
                    margin-top: 20px;
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }
                a {
                    display: inline-block;
                    margin-top: 20px;
                    color: #4CAF50;
                    text-decoration: none;
                    font-weight: bold;
                }
            </style>
        </head>
        <body>
            <div class="success-box">
                <h1>✅ Cadastro realizado com sucesso!</h1>
            </div>
            <div class="info">
                <h2>Dados recebidos:</h2>
                <p><strong>Nome:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
            </div>
            <a href="javascript:history.back()">← Voltar ao formulário</a>
        </body>
        </html>
    `);
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    console.log(`📝 Aguardando requisições em POST /register`);
});
