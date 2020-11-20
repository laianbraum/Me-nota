import { Router } from 'express';

import './database/connection'

import toDosController from './controllers/toDosController';

const routes = Router();

routes.post('/todo', toDosController.create);
routes.get('/todo', toDosController.index);
routes.delete('/todo/:id', toDosController.delete);

export default routes;