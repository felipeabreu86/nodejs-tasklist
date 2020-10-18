import app from './app';

const port = process.env.PORT || '3333';

// Inicializar o servidor
app.set('port', port);
app.listen(port);
console.log(`API rodando na porta ${port}...`);
