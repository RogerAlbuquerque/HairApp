import {Router} from 'express';

import { createClient } from './app/useCases/clients/createClient';
import { deleteClient } from './app/useCases/clients/deleteClient';
import { showClient } from './app/useCases/clients/showClients';
import { createHairdresser } from './app/useCases/hairdressers/createHairdresser';
import { deleteHairdresser } from './app/useCases/hairdressers/deleteHairdresser';
import { showHairdresser } from './app/useCases/hairdressers/showHairdresser';



export const router = Router();

// ROTAS
router.get('/client', showClient);

router.post('/client', createClient);

router.delete('/client/:id', deleteClient);

router.post('/hairdresser', createHairdresser);

router.get('/hairdresser', showHairdresser);

router.delete('/hairdresser/:id', deleteHairdresser);
