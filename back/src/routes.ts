import { Router } from 'express';

import './database/connection'

import subjectController from './controllers/subjectController';
import toDosController from './controllers/toDosController';

const routes = Router();

routes.post('/todo', toDosController.create);
routes.get('/todo', toDosController.index);
routes.delete('/todo/:id', toDosController.delete);

routes.post('/subject', subjectController.create);
routes.get('/subject', subjectController.index);
routes.delete('/subject/:id', subjectController.delete);

export default routes;