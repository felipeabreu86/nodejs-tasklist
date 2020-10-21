import { Router } from 'express';
import authMiddleware from './app/middlewares/auth';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

// User Controller
routes.post('/users', UserController.store);

// Session Controller
routes.post('/sessions', SessionController.store);

// Todas rotas abaixo desse middleware precisa estar autenticado
routes.use(authMiddleware);
routes.put('/users', UserController.update);
// Se eu quisesse passar o middleware individualmente para cada rota, poderia usar assim:
// routes.put('/users', authMiddleware, UserController.update);

export default routes;
