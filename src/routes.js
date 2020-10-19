import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

// User Controller
routes.post('/users', UserController.store);

// Session Controller
routes.post('/sessions', SessionController.store);

export default routes;
