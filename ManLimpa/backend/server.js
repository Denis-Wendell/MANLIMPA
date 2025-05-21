const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { testConnection } = require('./config/db');
require('dotenv').config();

// Importar rotas
const denunciasRoutes = require('./routes/denuncias');
const tiposResiduoRoutes = require('./routes/tiposResiduo');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors()); // Habilitar CORS para permitir solicitações do frontend
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Teste de conexão com o banco de dados
(async () => {
  await testConnection();
})();

// Rotas
app.use('/api/denuncias', denunciasRoutes);
app.use('/api/tipos-residuo', tiposResiduoRoutes);

// Rota básica para testar se o servidor está funcionando
app.get('/', (req, res) => {
  res.send('API do ManLimpa está funcionando!');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;