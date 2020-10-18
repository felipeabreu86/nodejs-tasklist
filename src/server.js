import app from './app';
import { name } from '../package.json';

const port = process.env.PORT || '3333';

// Inicializar o servidor
app.set('port', port);
app.listen(port);
console.log(`API ${name} rodando na porta ${port}...`);
