import { Router } from 'express';
import authMiddleware from './app/middlewares/auth';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import TaskController from './app/controllers/TaskController';

const routes = new Router();

// User Controller
routes.post('/users', UserController.store);
routes.put('/users', authMiddleware, UserController.update);

// Session Controller
routes.post('/sessions', SessionController.store);

// Task Controller
routes.post('/tasks', authMiddleware, TaskController.store);
routes.get('/tasks', authMiddleware, TaskController.index);
routes.put('/tasks/:task_id', authMiddleware, TaskController.update);
routes.delete('/tasks/:task_id', authMiddleware, TaskController.delete);

export default routes;
