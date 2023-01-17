import {Router} from 'express';

import { createClient } from './app/useCases/clients/createClient';
import { deleteClient } from './app/useCases/clients/deleteClient';
import { showClient } from './app/useCases/clients/showClients';



export const router = Router();

// ROTAS
router.get('/client', showClient);

router.post('/client', createClient);

router.delete('/client/:id', deleteClient);
