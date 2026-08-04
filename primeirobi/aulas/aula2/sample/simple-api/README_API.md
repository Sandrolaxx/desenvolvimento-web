# API de Formulário - Exemplo

Esta é uma API simples criada com Express.js para demonstrar como processar dados de formulários HTML.

## 🚀 Como executar

### 1. Instalar as dependências
```bash
npm install
```

### 2. Iniciar o servidor
```bash
npm start
```

Ou para desenvolvimento com auto-reload:
```bash
npm run dev
```

O servidor estará disponível em `http://localhost:8080`

## 📝 Como usar

1. Inicie o servidor com `npm start`
2. Abra o arquivo `form_sample.html` no navegador
3. Preencha o formulário e clique em "Enviar"
4. A API receberá os dados e mostrará uma página de confirmação

## 🔍 O que acontece

- O formulário envia uma requisição POST para `http://localhost:8080/register`
- O servidor Express processa os dados usando middleware `express.urlencoded()`
- Os dados são extraídos do `req.body`
- Uma resposta HTML é enviada de volta ao navegador mostrando os dados recebidos
- Os dados também aparecem no console do servidor

## 📚 Conceitos demonstrados

- Configuração básica de servidor Express
- Middleware para processar dados de formulário
- CORS para permitir requisições cross-origin
- Roteamento HTTP (GET e POST)
- Recebimento e processamento de dados do formulário
- Resposta HTML dinâmica
